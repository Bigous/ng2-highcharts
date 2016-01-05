import {CONST_EXPR} from 'angular2/src/facade/lang';

// Import all directives
import {SampleDirective} from './directives/sample.directive';

// Export all directives
export {SampleDirective} from './directives/sample.directive';

// Export convenience property
export const DIRECTIVES = CONST_EXPR([
  SampleDirective
]);
