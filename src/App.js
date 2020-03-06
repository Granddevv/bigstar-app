import React, { Component } from 'react';
import { observer } from "mobx-react"

@observer
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const store = this.props.store;
        return (
            <div>
                <span>{store.report}</span>
            </div>
        )
    }
}

export default App;

// // import React, { Component } from 'react';
// // import SortableTree from 'react-sortable-tree';
// //
// // import 'react-sortable-tree/style.css';
// // import './App.css'
// //
// // class App extends Component {
// //     constructor(props) {
// //         super(props);
// //
// //         this.state = {
// //             treeData: [
// //                 { title: 'book', children: [{ title: 'crazy', editFlag: true }] },
// //                 { title: 'beatury and beasts', children: [{ title: 'ugly', editFlag: false}] }
// //             ],
// //             editText: "temp"
// //         };
// //     }
// //
// //     handleChange = (evt) => {
// //         this.setState({editText: evt.target.value});
// //     }
// //
// //     renderContent = (rowInfo) => {
// //         if(rowInfo.node.editFlag) {
// //             return <input value={this.state.editText} onChange={this.handleChange} />
// //         } else {
// //             return <span style={{backgroundColor: "#ff0000"}}>{rowInfo.node.title}</span>
// //         }
// //     }
// //
// //     alertNodeInfo = (rowInfo) => {
// //         console.log("row Information", rowInfo)
// //     }
// //
// //     render() {
// //         return (
// //             <div style={{ height: 400 }}>
// //                 <SortableTree
// //                     treeData={this.state.treeData}
// //                     onChange={treeData => this.setState({ treeData })}
// //                     onMoveNode={({ node, treeIndex, path }) =>
// //                         console.log("moving node --- ", node, treeIndex, path)
// //                     }
// //                     generateNodeProps={rowInfo => ({
// //                         title: this.renderContent(rowInfo),
// //                         buttons: [
// //                             <button
// //                                 type="button"
// //                                 className="btn btn-outline-success"
// //                                 style={{
// //                                     verticalAlign: 'middle',
// //                                 }}
// //                                 onClick={() => this.alertNodeInfo(rowInfo)}
// //                             >
// //                                 ℹ
// //                             </button>,
// //                             <button
// //                                 type="button"
// //                                 className="btn btn-outline-success"
// //                                 style={{
// //                                     verticalAlign: 'middle',
// //                                 }}
// //                                 onClick={() => this.alertNodeInfo(rowInfo)}
// //                             >
// //                                 DEL
// //                             </button>,
// //
// //                         ],
// //                     })}
// //                 />
// //             </div>
// //         )
// //     }
// // }
// //
// // export default App;
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {
//     Cell,
//     Column,
//     Table,
//     ColumnHeaderCell,
//     CopyCellsMenuItem
// } from "@blueprintjs/table";
// import { Menu, MenuItem } from "@blueprintjs/core";
// import { FocusStyleManager } from "@blueprintjs/core";
//
// class App extends Component {
//
//   constructor(props) {
//       super(props);
//
//       this.state = {
//           columnWidthOne: 100,
//           columnWidthTwo: 100
//       }
//   }
//
//   cellRenderer = (rowIndex) => {
//     return <Cell>{"bOokingis optodfldjfklsfjdsklfdkjl"}</Cell>
//   };
//
//   handleSortHigh = () => {
//       console.log("Sort high");
//   }
//
//   handleSortLow = () => {
//       console.log("Sort Low");
//   }
//
//   handleGetCellData = (rowIndex, columnIndex) => {
//       console.log("get cell data", rowIndex, columnIndex)
//         let temp = "boook"
//       navigator.clipboard.writeText(temp);
//   }
//
//   menuRenderer = () => {
//       return (
//           <Menu>
//               <MenuItem icon="sort-asc" onClick={this.handleSortHigh} text="Sort Rank Asc" />
//               <MenuItem icon="sort-desc" onClick={this.handleSortLow} text="Sort Rank Desc" />
//           </Menu>
//       )
//   }
//
//   nameRender = () => {
//       return <div style={{display: 'flex', alignItems: 'center', border: '1px solid green'}}><div style={{background: 'red'}}>Booking</div></div>
//   }
//
//   columnHeaderCellRenderer = () => {
//       return <ColumnHeaderCell menuRenderer={this.menuRenderer} nameRenderer={this.nameRender} >
//           {/*<div style={{backgroundColor: '#ff0000', textAlign: 'right', padding: '5px'}}>CALL*/}
//             {/*<button onClick={() => this.menuRenderer()}>Book</button>*/}
//           {/*</div>*/}
//       </ColumnHeaderCell>
//   }
//
//   renderBodyContextMenu = (context) => {
//       return (
//           <Menu>
//               <CopyCellsMenuItem context={context} getCellData={this.handleGetCellData} text="Copy" />
//           </Menu>
//       )
//   }
//
//     increaseOne = () => {
//       let one = this.state.columnWidthOne + 50;
//       this.setState({columnWidthOne: one});
//     }
//
//     increaseTwo = () => {
//       let two = this.state.columnWidthTwo + 50;
//       this.setState({columnWidthTwo: two});
//     }
//
//
//   render() {
//       // FocusStyleManager.onlyShowFocusOnTabs();
//       return (
//           <div style={{display: 'flex'}}>
//               <div style={{flex: '1'}}>
//                   <Table
//                       bodyContextMenuRenderer={this.renderBodyContextMenu}
//                       columnWidths={[this.state.columnWidthOne, this.state.columnWidthTwo]}
//                       enableRowHeader={false}
//                       style={{width: '100%'}}
//                       numRows={10}>
//                       <Column
//                           name="Dollars"
//                           cellRenderer={this.cellRenderer}
//                           columnHeaderCellRenderer={this.columnHeaderCellRenderer}
//                       />
//                       <Column
//                           name="Pricing"
//                           cellRenderer={this.cellRenderer}
//                           columnHeaderCellRenderer={this.columnHeaderCellRenderer}
//                       />
//                   </Table>
//               </div>
//               <div style={{flex: '1'}}>
//                   <button onClick={this.increaseOne}>One</button>
//                   <button onClick={this.increaseTwo}>Two</button>
//               </div>
//           </div>
//
//       )
//
//   }
// }
//
// export default App;