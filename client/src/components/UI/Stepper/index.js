import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Index extends Component {
    state = {
        activeStep: 0,
        completed: new Set(),
        skipped: new Set()
    }

    getSteps = () => {
        return ['Personal Information', 'Education', 'Subjects']
    }

    getStepContent = step => {
        switch (step) {
            case 0:
                return this.props.step1
            case 1:
                return this.props.step2
            case 2:
                return this.props.step3
            default:
                return 'Unknown step'
        }
    }

    totalSteps = () => this.getSteps().length

    handleSkip = () => {
        const { activeStep } = this.state

        this.setState(state => {
            const skipped = new Set(state.skipped.values())
            skipped.add(activeStep)
            return {
                activeStep: state.activeStep + 1,
                skipped
            }
        })
    }

    handleNext = () => {
        let activeStep

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed
            // find the first step that has been completed
            const steps = this.getSteps()
            activeStep = steps.findIndex(
                (step, i) => !this.state.completed.has(i)
            )
        } else {
            activeStep = this.state.activeStep + 1
        }
        this.setState({
            activeStep
        })
    }

    handleStep = step => () => {
        this.setState({
            activeStep: step
        })
    }

    handleComplete = () => {
        // eslint-disable-next-line react/no-access-state-in-setstate
        const completed = new Set(this.state.completed)
        completed.add(this.state.activeStep)
        this.setState({
            completed
        })

        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        if (completed.size !== this.totalSteps() - this.skippedSteps()) {
            this.handleNext()
        }
    }

    skippedSteps() {
        return this.state.skipped.size
    }

    isStepSkipped(step) {
        return this.state.skipped.has(step)
    }

    isStepComplete(step) {
        return this.state.completed.has(step)
    }

    completedSteps() {
        return this.state.completed.size
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps() - this.skippedSteps()
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1
    }

    render() {
        const steps = this.getSteps()
        const { activeStep } = this.state

        return (
            <div>
                <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {}
                        const buttonProps = {}

                        if (this.isStepSkipped(index)) {
                            props.completed = false
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepButton
                                    onClick={this.handleStep(index)}
                                    completed={this.isStepComplete(index)}
                                    {...buttonProps}
                                >
                                    {label}
                                </StepButton>
                            </Step>
                        )
                    })}
                </Stepper>
                <div>
                    {this.getStepContent(activeStep)}
                    <div className="my-4 center-align">
                        {activeStep !== steps.length - 1 && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleComplete}
                            >
                                Continue
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
