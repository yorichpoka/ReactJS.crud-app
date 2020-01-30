import React, { Component } from 'react';
import './UserComponent.css';
import DataGrid, { Column, Paging, Selection, FilterRow, SearchPanel, HeaderFilter, Pager, GroupPanel, Editing, KeyboardNavigation, ValidationRule }  from 'devextreme-react/data-grid';
import { UserModel } from '../../models/UserModel';

class UserComponent extends Component {

    state = {
        idSelectedRowsData: []
    }

    dataSource = [
        new UserModel('admin', 'admin', 'Ulrich POKA', new Date().getTime()),
        new UserModel('user1', 'user1', 'User N°1', new Date().getTime()),
        new UserModel('admin', 'admin', 'User N°2', new Date().getTime())
    ];

    onSelectionChanged = ({ selectedRowsData }) => {
        // Get array of id selected in state
        this.setState({ idSelectedRowsData: selectedRowsData.map(l => l.id ) });
    }

    onToolbarPreparing = (event) => {

    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <div className="float-left">
                        <i className="fa fa-list"></i> Users list
                    </div>
                    <button className="btn btn-sm btn-secondary float-right" disabled={ this.state.idSelectedRowsData.length === 0} >
                        <i className="fa fa-trash"></i> Delete selection ({ this.state.idSelectedRowsData.length })
                    </button>
                </div>
                <div className="card-body">
                    <DataGrid
                        id="gridContainer"
                        dataSource={ this.dataSource }
                        showColumnLines={true}
                        showRowLines={false}
                        showBorders={true}
                        cacheEnabled={false}
                        columnAutoWidth={true}
                        allowColumnReordering={true}
                        allowColumnResizing={true}
                        onSelectionChanged={ this.onSelectionChanged }
                        onToolbarPreparing={ this.onToolbarPreparing }
                    >
                        <Paging defaultPageSize={2} />
                        <Selection mode='multiple' />
                        <FilterRow visible={true} />
                        <SearchPanel visible={true} highlightCaseSensitive={true} />
                        <HeaderFilter visible={true} />
                        <Pager showPageSizeSelector={true} allowedPageSizes={ [3, 5, 10, 100] } showInfo={true} />
                        <GroupPanel visible={true} />
                        <Editing mode={'batch'} selectTextOnEditStart={true} useIcons={true} refreshMode={'full'} startEditAction={'dblClick'} allowAdding={true} allowUpdating={true} allowDeleting={true} />
                        <KeyboardNavigation editOnKeyPress={true} enterKeyAction={'startEdit'} enterKeyDirection={'none'} />

                        <Column dataField="login">
                            <ValidationRule type="required" />
                        </Column>
                        <Column dataField="password">
                            <ValidationRule type="required" />
                        </Column>
                        <Column dataField="username">
                            <ValidationRule type="required" />
                        </Column>
                    </DataGrid>
                </div>
            </div>
        );
    }

}

export default UserComponent;