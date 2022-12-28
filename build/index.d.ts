import WDIOReporter from '@wdio/reporter';
import type { Reporters } from '@wdio/types';
export default class MochaReporter extends WDIOReporter {
    startTime: any;
    endTime: any;
    constructor(options: Reporters.Options);
    resetTestResults(): Promise<void>;
    onSuiteStart(test: any): void;
    onTestPass(test: any): void;
    onTestFail(test: any): void;
    onTestSkip(test: any): void;
    onSuiteEnd(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map