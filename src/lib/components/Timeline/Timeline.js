import React from 'react'
import PropTypes from 'prop-types'

/* css */
import './styles.css'

const Timeline = ({ timelines, direction, pivot }) => (
  <div className={`timeline timeline--${pivot} timeline--${direction}`}>
    {
      timelines.map(item => (
        <div key={item.id} className="timeline__event">
          <div className="timeline__icons" />
          <div className="timeline_content">
            <div className="timeline__title">{item.title}</div>
            {item.sub && <div className="timeline__lead">{item.sub}</div>}
          </div>
        </div>
      ))
    }
  </div>
)

Timeline.propTypes = {
  /** data */
  timelines: PropTypes.array.isRequired,
  /** left | center | right */
  direction: PropTypes.string,
  /** vertical | horizontal */
  pivot: PropTypes.string,
}

Timeline.defaultProps = {
  direction: 'left',
  pivot: 'vertical',
}

export default Timeline
