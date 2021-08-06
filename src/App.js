import React from "react";
import "./App.css";

import { FaFolder } from "react-icons/fa";
import { FaFolderOpen} from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";

class TreeNode extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  handleClick(event) {
    event.stopPropagation();
    this.setState({
      data: Object.assign({}, this.state.data, {
        expanded: !this.state.data.expanded,
      }),
    });
  }

  render() {
    return (
      <li className="folder" onClick={(event) => this.handleClick(event)}>
       <BsPlusCircle style = {{padding: 5}}/>
        {this.state.data.expanded ? (
          <FaFolderOpen className = 'yellowopen'/>
        ) : (
          <FaFolder  className = 'yellowclose'/>
          
        )}
        {this.state.data.value}
        <ul className="ul">
          {this.state.data.expanded &&
            this.state.data.children &&
            this.state.data.children.map((child) => <TreeNode data={child} />)}
        </ul>
      </li>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: "crop commodities",
          expanded: false,
          children: [
            {
              value: "BT",
              expanded: false,
              children: [],
            },
            {
              value: "NT",
              expanded: false,
              children: [
                {
                  value: "Fruit",
                  expanded: false,
                  children: [],
                },
                {
                  value: "Herbs and spices",
                  expanded: false,
                  children: [],
                },
                {
                  value: "Grases",
                  expanded: false,
                  children: [],
                },
                {
                  value: "Nuts and Seeds",
                  expanded: false,
                  children: [],
                },
                {
                  value: "vegitables",
                  expanded: false,
                  children: [
                    {
                      value: "BT",
                      expanded: false,
                      children: [],
                    },
                    {
                      value: "RT",
                      expanded: false,
                      children: [],
                    },
                    {
                      value: "NT",
                      expanded: false,
                      children: [
                        {
                          value: "vegitable without souce and corn",
                          expanded: false,
                          children: [],
                        },
                        {
                          value: "Vegitabe with souce",
                          expanded: false,
                          children: [],
                        },
                        {
                          value: "Nuts and Seeds",
                          expanded: false,
                          children: [],
                        },
                        {
                          value: "Lettuse and sprouts",
                          expanded: false,
                          children: [],
                        },
                        {
                          value: "vegitable juice and drinks",
                          expanded: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: "Domestic",
          expanded: false,
          children: [
            {
              value: "Detergent",
              children: [],
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <ul className="ul">
        {this.state.data.map((node) => (
          <TreeNode data={node} />
        ))}
      </ul>
    );
  }
}
export default App;
