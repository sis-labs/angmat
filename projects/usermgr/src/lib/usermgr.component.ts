import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface ContainerNode {
  name: string;
  children?: ContainerNode[];
}

const ephadree: ContainerNode[] = [
  {
    name: 'Zone 1',
    children: [
      {
        name: 'Residents',
        children: [
          {
            name: 'Margaret'
          },
          {
            name: 'Silvestre'
          },
          {
            name: 'Leontine'
          },
          {
            name: 'Margerite'
          },
        ],
      },
      {
        name: 'Agents',
        children: [
          {
            name: 'Sophie'
          },
          {
            name: 'Noemie'
          },
          {
            name: 'Line'
          },
          {
            name: 'Julien'
          }
        ]
      }
    ]
  },
  {
    name: 'Zone 2',
    children: [
      {
        name: 'Residents',
        children: [
          {
            name: 'Victor'
          },
          {
            name: 'Hercule'
          },
          {
            name: 'Betty'
          },
          {
            name: 'Ida'
          },
        ],
      },
      {
        name: 'Agents',
        children: [
          {
            name: 'Lou'
          },
          {
            name: 'Julie'
          },
          {
            name: 'Daniel'
          },
          {
            name: 'Manon'
          }
        ]
      }
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'lib-usermgr',
  templateUrl: './usermgr.component.html',
  styleUrls: ['./usermgr.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UsermgrComponent implements OnInit {

  loading = true;
  error: any;
  users: [];

  columns = [
    { prop: 'username'},
    { prop: 'firstname' },
    { prop: 'lastname' },
    { prop: 'email' },
  ];

  constructor(private apollo: Apollo) {
    this.dataSource.data = ephadree;
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            users {
              username
              firstname
              lastname
              email
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        const r : any = result.data || null;
        this.users = r && r.users;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }

  private _transformer = (node: ContainerNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
