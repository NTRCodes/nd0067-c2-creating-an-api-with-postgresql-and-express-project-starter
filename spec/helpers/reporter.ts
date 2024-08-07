import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter'
import JasmineStartedInfo = jasmine.JasmineStartedInfo

class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: JasmineStartedInfo, log: string): string {
        return `TypeScript ${log}`
    }
}

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(
    new SpecReporter({
        spec: {
            displayStacktrace: StacktraceOption.NONE,
            displayPending: true,
            displaySuccessful: true,
            displayFailed: true,
            displayDuration: true
        },
        customProcessors: [CustomProcessor],
    })
)