import React from 'react';

export interface TimelineItem {
	id: string | number;
	title: string;
	sub?: string;
}

export type TimelineDirection = 'left' | 'center' | 'right';
export type TimelinePivot = 'vertical' | 'horizontal';

export interface TimelineProps {
	/**
	 * Array of TimelineItem to display on the timeline
	 */
	timelines: TimelineItem[];
	/**
	 * Left, Center, or Right
	 */
	direction?: TimelineDirection;
	/**
	 * Horizontal or Vertical
	 */
	pivot?: TimelinePivot;
	/**
	 * 'none' or a CSS px string. Eg: 100px, 200px...
	 */
	textLimit?: string;
	/**
	 * Whether to display a tooltip
	 */
	tooltip?: boolean;
}

declare const Timeline: React.ComponentType<TimelineProps>;
export default Timeline;
