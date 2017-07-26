import breadcrumbInstaller from './components/breadcrumb';
import buttonInstaller from './components/button';
import calloutInstaller from './components/callout';
import checkboxInstaller from './components/checkbox';
import choiceFieldGroupInstaller from './components/choice_field_group';
import datePickerInstaller from './components/date_picker';
import labelInstaller from './components/label';
import linkInstaller from './components/link';
import messageBarInstaller from './components/message_bar';
import progressIndicatorInstaller from './components/progress_indicator';
import spinnerInstaller from './components/spinner';
import tableInstaller from './components/table';
import textFieldInstaller from './components/text_field';
import toggleInstaller from './components/toggle';

export default function (Vue) {
  breadcrumbInstaller(Vue);
  buttonInstaller(Vue);
  calloutInstaller(Vue);
  checkboxInstaller(Vue);
  choiceFieldGroupInstaller(Vue);
  datePickerInstaller(Vue);
  labelInstaller(Vue);
  linkInstaller(Vue);
  messageBarInstaller(Vue);
  progressIndicatorInstaller(Vue);
  spinnerInstaller(Vue);
  tableInstaller(Vue);
  textFieldInstaller(Vue);
  toggleInstaller(Vue);
}
