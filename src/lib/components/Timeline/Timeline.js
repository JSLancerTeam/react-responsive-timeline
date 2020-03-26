import React from 'react'
import PropTypes from 'prop-types'

/* css */
import './styles.css'

const Timeline = ({
  timelines, direction, pivot, textLimit, tooltip,
}) => {
  const classTextLimit = textLimit !== 'none' ? 'react-timeline__content--limit' : ''
  const styleTextLimit = textLimit !== 'none' ? { width: `${textLimit}` } : {}
  const cssTooltip = tooltip ? 'react-timeline__event--tooltip' : ''

  return (
    <div className={`react-timeline react-timeline--${pivot} react-timeline--${direction}`}>
      {
        timelines.map((item, index) => (
          <div key={index} className={`react-timeline__event ${cssTooltip}`}>
            <div className="react-timeline__icons">
              {tooltip && (
                <div className="react-timeline__tooltip">
                  <div className="react-timeline__arrow" />
                  <span>{item.title}</span>
                </div>
              )}
            </div>
            <div className={`react-timeline_content ${classTextLimit}`} style={styleTextLimit}>
              <div className="react-timeline__title"><span>{item.title}</span></div>
              {item.sub && <div className="react-timeline__lead">{item.sub}</div>}
            </div>
          </div>
        ))
      }
    </div>
  )
}

Timeline.propTypes = {
  /** data */
  timelines: PropTypes.array.isRequired,
  /** left | center | right */
  direction: PropTypes.string,
  /** vertical | horizontal */
  pivot: PropTypes.string,
  /** text limit */
  textLimit: PropTypes.string,
  /** tooltip */
  tooltip: PropTypes.bool,
}

Timeline.defaultProps = {
  direction: 'left',
  pivot: 'vertical',
  textLimit: 'none',
  tooltip: false,
}

export default Timeline
