import React, { Component } from "react"
import { intlShape } from "react-intl"
import PropTypes from "prop-types"

import PageTemplate from "../../../components/PageTemplate"

class AttendanceComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    PropTypes = {
        intl: intlShape.isRequired,
        fetchClassAttendance: PropTypes.function,
        setPageTitle: PropTypes.function,
        app: PropTypes.object,
        attendance: PropTypes.object,
    }

    componentWillMount() {
        this.props.setPageTitle(
            this.props.intl.formatMessage({ id: 'app.pos.checkin.page_title' })
        )

        console.log(this.props.match.params.clsID)
        this.props.fetchClassAttendance(this.props.match.params.clsID)

    }

    render() {
        return (
            <PageTemplate app_state={this.props.app}>
                { 
                    (!this.props.attendance.loaded) ? 
                        <div>Loading attendance, please wait...</div> :
                        <section className="checkin_attendance">
                            {/* Booking options will go here */}
                            Loaded!!!
                        </section>
                }
            </PageTemplate>
        )
    }
}

export default AttendanceComponent
