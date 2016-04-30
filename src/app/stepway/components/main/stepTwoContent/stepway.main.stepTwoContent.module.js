import {
  stepTwoContentComponent,
  LINE_STEP_TWO_CONTENT_COMPONENT
}                                       from './stepway.main.stepTwoContent.component';
import {
  STEP_TWO_COMMAND_PANEL_COMPONENT_NAME,
  StepTwoCommandPanelComponent
}                                       from './stepway.main.StepTwoCommandPanel.component';
import {
  STEP_TWO_VISUAL_PANEL_COMPONENT_NAME,
  StepTwoVisualPanelComponent
}                                       from './stepway.main.StepTwoVisualPanel.component';

const STEP_TWO_CONTENT_COMPONENT_MODULE = '';

export default angular
                .module(STEP_TWO_CONTENT_COMPONENT_MODULE, [])
                .component(LINE_STEP_TWO_CONTENT_COMPONENT, stepTwoContentComponent)
                .component(STEP_TWO_COMMAND_PANEL_COMPONENT_NAME, StepTwoCommandPanelComponent)
                .component(STEP_TWO_VISUAL_PANEL_COMPONENT_NAME, StepTwoVisualPanelComponent);
