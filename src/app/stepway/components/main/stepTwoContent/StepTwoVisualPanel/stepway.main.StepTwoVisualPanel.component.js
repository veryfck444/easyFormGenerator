export const STEP_TWO_VISUAL_PANEL_COMPONENT_NAME = 'stepTwoVisualPanel';

export const StepTwoVisualPanelComponent = {
  template: `
  <div id="visualPanel">
    <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">
        <i class="fa fa-eye"></i>
        &nbsp;
        {{'VISUAL_PANEL' | translate}}
      </h3>
    </h3>
    </div>
    <div class="panel-body">
      <!-- lines / columns -->
      <ul class="list-group">
        <li
          class="list-group-item"
          ng-repeat="line in $ctrl.configuration.lines track by $index">
            <!-- columns -->
            <div ng-switch on="line.columns.length">
              <div
                class="row linesList"
                ng-switch-when="1">
                <div
                  class="col-md-12 lineCommandButtons"
                  ng-show="$ctrl.configuration.lines.length > 1">
                  <button
                    class="btn"
                    ng-class="{'btn-warning':($index + 1) !== $ctrl.configuration.activeLine, 'btn-success': ($index + 1) === $ctrl.configuration.activeLine}"
                    ng-click="$ctrl.setActiveLineNumber({index: $index + 1})">
                    <i
                      class="fa"
                      ng-class="{'fa-square-o': ($index + 1) !== $ctrl.configuration.activeLine, 'fa-check-square-o': ($index + 1) === $ctrl.configuration.activeLine}">
                    </i>
                  </button>
                </div>
                <div class="col-md-12">
                  <div class="col-md-12 well">
                    <button
                      class="btn btn-lg btn-block"
                      ng-class="{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}"
                      ng-click="$ctrl.showModalAddCtrlToColumn({size: '', index: $index, numcolumn: 0})">
                      {{line.columns[0].control.type !== 'none'  ? line.columns[0].control.type + ' ' + line.columns[0].control.subtype || '' : 'column 1'}}
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="row linesList"
                ng-switch-when="2">
                <div
                  class="col-md-12 lineCommandButtons"
                  ng-show="$ctrl.configuration.lines.length > 1">
                  <button
                    class="btn"
                    ng-class="{'btn-warning':($index + 1) !== $ctrl.configuration.activeLine, 'btn-success': ($index + 1) === $ctrl.configuration.activeLine}"
                    ng-click="$ctrl.setActiveLineNumber({index: $index + 1})">
                    <i
                      class="fa"
                      ng-class="{'fa-square-o': ($index + 1) !== $ctrl.configuration.activeLine, 'fa-check-square-o': ($index + 1) === $ctrl.configuration.activeLine}">
                    </i>
                  </button>
                </div>
                <div class="col-md-12">
                  <div class="col-md-6 well">
                    <button
                      class="btn btn-lg btn-block"
                      ng-class="{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}"
                      ng-click="$ctrl.showModalAddCtrlToColumn({size: '', index: $index, numcolumn: 0})">
                      {{line.columns[0].control.type !== 'none'  ? line.columns[0].control.type + ' ' + line.columns[0].control.subtype || '' : 'column 1'}}
                    </button>
                  </div>
                  <div class="col-md-6 well">
                    <button
                      class="btn btn-lg btn-block"
                      ng-class="{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}"
                      ng-click="$ctrl.showModalAddCtrlToColumn({size: '', index: $index, numcolumn: 1})">
                      {{line.columns[1].control.type !== 'none'  ? line.columns[1].control.type + ' ' + line.columns[1].control.subtype || '' : 'column 2'}}
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="row linesList"
                ng-switch-when="3">
                <div
                  class="col-md-12 lineCommandButtons"
                  ng-show="$ctrl.configuration.lines.length > 1">
                  <button
                    class="btn"
                    ng-class="{'btn-warning':($index + 1) !== $ctrl.configuration.activeLine, 'btn-success': ($index + 1) === $ctrl.configuration.activeLine}"
                    ng-click="$ctrl.setActiveLineNumber({index: $index + 1})">
                    <i
                      class="fa"
                      ng-class="{'fa-square-o': ($index + 1) !== $ctrl.configuration.activeLine, 'fa-check-square-o': ($index + 1) === $ctrl.configuration.activeLine}">
                    </i>
                  </button>
                </div>
                <div class="col-md-12">
                  <div class="col-md-4 well">
                    <button
                      class="btn btn-lg btn-block"
                      ng-class="{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}"
                      ng-click="$ctrl.showModalAddCtrlToColumn({size: '', index: $index, numcolumn: 0})">
                      {{line.columns[0].control.type !== 'none'  ? line.columns[0].control.type + ' ' + line.columns[0].control.subtype || '' : 'column 1'}}
                    </button>
                  </div>
                  <div class="col-md-4 well">
                    <button
                      class="btn btn-lg btn-block"
                      ng-class="{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}"
                      ng-click="$ctrl.showModalAddCtrlToColumn({size: '', index: $index, numcolumn: 1})">
                      {{line.columns[1].control.type !== 'none'  ? line.columns[1].control.type + ' ' + line.columns[1].control.subtype || '' : 'column 2'}}
                    </button>
                  </div>
                  <div class="col-md-4 well">
                    <button
                      class="btn btn-lg btn-block"
                      ng-class="{'btn-primary': !line.columns[2].control.edited, 'btn-success': line.columns[2].control.edited}"
                      ng-click="$ctrl.showModalAddCtrlToColumn({size: '', indexLine: $index, numcolumn: 2})">
                      {{line.columns[2].control.type !== 'none'  ? line.columns[2].control.type + ' ' + line.columns[2].control.subtype || '' : 'column 3'}}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `,
  bindings: {
    configuration:            '=',
    setActiveLineNumber:      '&',
    showModalAddCtrlToColumn: '&'
  },
  controller:
  class StepTwoVisualPanelController {
    constructor() {

    }

    static get $inject() {
      return [];
    }
  }
};