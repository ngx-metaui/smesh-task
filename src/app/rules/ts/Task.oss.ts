/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const TaskRule = 'class=Task {   @field=title {     trait:derived,heading2;     type: String;     label:"Task";     value: ${object.name + "(" + object.uniqueName + ")"};   }    field=uniqueName {     label: "Id";   }   field=name {     label: "Title";     trait: required;     placeholder: "Unique name that identifies this Task";   }   field=(reporter,assignee) {     trait:asAutoComplete, withDetail, required;     placeholder: "Select a user";     lookupKey: "fullName";   }    field=project {     trait:asAutoComplete, withDetail, required;     placeholder: "Select a project";   }    field=status {     trait:asRadio;     choices: ["Not Started", "In Progress", "Done"];   }    field=priority {     trait:asRadio;     choices: ["Low", "Medium", "High"];   }    field=category {     trait:asSelect;     choices: ["Design", "Development", "Maintenance"];   }    field=dueDate {     label:"Due On";   }    field=description {     trait:longtext;   } }  class=Task {    operation=(create, edit) {       zNone => *;       zLeft  => name#fluid =>  reporter => assignee => dueDate => category;       zRight => project =>  status => priority;       zBottom => description;    }      operation=view {       zNone => *;       zLeft  => title#fluid => name => assignee => reporter => project => status;       zRight  => priority => dueDate => createdDate => category;       zBottom  => description;     } }   class=Task object {   action=(reset, save) {       trait:controllerAction;       visible:${properties.get("editing") === true};   }     action=edit {       trait:controllerAction;       visible:${properties.get("editing") === false};   }    action=(edit, save) {     buttonOptions:"emphasized";   } }   ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 