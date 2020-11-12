import React from 'react';
import {FORMS} from '../../const';
import Form from '../../../../baseComponents/Form';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {DepartmentAddFormGeneral} from './DepartmentAddFormGeneral';
import {DepartmentAddFormMedia} from './DepartmentAddFormMedia';
import Tabs, {Tab} from '../../../../baseComponents/Tabs';
import {TABS} from './const';
import {DepartmentAddFormStaff} from './DepartmentAddFormStaff';
import {DepartmentAddFormAssistance} from './DepartmentAddFormAssistance';

const DepartmentEditForm = (
    {
        editMode,
        staffData,
        initialValues,
        mediaModalData,
        assistanceData,
        isDepartmentDetail,
        handleEditDepartment
    }
) => {
    return (
        <Form
            reInitOnEdit={editMode}
            initialValues={initialValues}
            onSubmit={handleEditDepartment}
            name={FORMS.EDIT_DEPARTMENT_FORM}
        >
            <Tabs
                tabs={TABS}
                activeTabName={TABS[0].tabName}
                render={({activeTabName}) => {
                    return (
                        <div>
                            <Tab
                                useUnmount={false}
                                tabName={TABS[0].tabName}
                                activeTabName={activeTabName}
                            >
                                <GridLayout>
                                    <GridLayoutRow grid="6-6">
                                        <DepartmentAddFormGeneral
                                            editMode={editMode}
                                        />
                                        <DepartmentAddFormMedia
                                            editMode={editMode}
                                            values={{
                                                mediaId: [initialValues.imageId],
                                                effectImageId: [initialValues.effectImageId]
                                            }}
                                            isDepartmentDetail={isDepartmentDetail}
                                            mediaModalData={mediaModalData}
                                        />
                                    </GridLayoutRow>
                                </GridLayout>
                            </Tab>
                            <Tab
                                useUnmount={false}
                                tabName={TABS[1].tabName}
                                activeTabName={activeTabName}
                            >
                                <DepartmentAddFormStaff
                                    editMode={editMode}
                                    staffData={staffData}
                                />
                            </Tab>
                            <Tab
                                useUnmount={false}
                                tabName={TABS[2].tabName}
                                activeTabName={activeTabName}
                            >
                                <DepartmentAddFormAssistance
                                    editMode={editMode}
                                    assistanceData={assistanceData}
                                />
                            </Tab>
                        </div>
                    )
                }}
            >
            </Tabs>
        </Form>
    );
};

export {DepartmentEditForm};
