/*
 * Copyright (C) 2016  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

// @flow


type LanguageOption = {
	name: string,
	id: number
};

type Publisher = {
	value: string,
	id: number
};

type EditionGroup = {
	value: string,
	id: number
};

export type Action = {
	payload?: mixed,
	type: string,
	metadata?: {}
};


export const UPDATE_EDITION_GROUP = 'UPDATE_EDITION_GROUP';
export const UPDATE_PUBLISHER = 'UPDATE_PUBLISHER';
export const UPDATE_RELEASE_DATE = 'UPDATE_RELEASE_DATE';
export const UPDATE_FORMAT = 'UPDATE_FORMAT';
export const UPDATE_LANGUAGES = 'UPDATE_LANGUAGES';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const UPDATE_WEIGHT = 'UPDATE_WEIGHT';
export const UPDATE_PAGES = 'UPDATE_PAGES';
export const UPDATE_WIDTH = 'UPDATE_WIDTH';
export const UPDATE_HEIGHT = 'UPDATE_HEIGHT';
export const UPDATE_DEPTH = 'UPDATE_DEPTH';
export const SHOW_PHYSICAL = 'SHOW_PHYSICAL';
export const SHOW_EDITION_GROUP = 'SHOW_EDITION_GROUP';

/**
 * Produces an action indicating that the edition status for the edition being
 * edited should be updated with the provided value.
 *
 * @param {number} newStatusId - The new value to be used for the edition
 *                 status ID.
 * @returns {Action} The resulting UPDATE_STATUS action.
 */
export function updateStatus(newStatusId: ?number): Action {
	return {
		payload: newStatusId,
		type: UPDATE_STATUS
	};
}

/**
 * Produces an action indicating that the edition format for the edition being
 * edited should be updated with the provided value.
 *
 * @param {number} newFormatId - The new value to be used for the edition
 *                 format ID.
 * @returns {Action} The resulting UPDATE_FORMAT action.
 */
export function updateFormat(newFormatId: ?number): Action {
	return {
		payload: newFormatId,
		type: UPDATE_FORMAT
	};
}

/**
 * Produces an action indicating that the release date for the edition
 * should be updated with the provided value. The action is marked to be
 * debounced by the keystroke debouncer defined for redux-debounce.
 *
 * @param {string} newReleaseDate - The new value to be used for the release
 *                 date.
 * @returns {Action} The resulting UPDATE_RELEASE_DATE action.
 */
export function debouncedUpdateReleaseDate(newReleaseDate: ?string): Action {
	return {
		meta: {debounce: 'keystroke'},
		payload: newReleaseDate,
		type: UPDATE_RELEASE_DATE
	};
}

/**
 * Produces an action indicating that the edition languages for the edition
 * being edited should be updated with the provided values.
 *
 * @param {LanguageOption} newLanguages - The new objects to be used for the
 *                         edition languages.
 * @returns {Action} The resulting UPDATE_LANGUAGES action.
 */
export function updateLanguages(newLanguages: Array<LanguageOption>): Action {
	return {
		payload: newLanguages,
		type: UPDATE_LANGUAGES
	};
}

/**
 * Produces an action indicating that the physical section of the edition
 * form should be shown.
 *
 * @returns {Action} The resulting SHOW_PHYSICAL action.
 */
export function showPhysical(): Action {
	return {
		type: SHOW_PHYSICAL
	};
}

/**
 * Produces an action indicating that the Edition Group section of the edition
 * form should be shown.
 *
 * @returns {Action} The resulting SHOW_EDITION_GROUP action.
 */
export function showEditionGroup(): Action {
	return {
		type: SHOW_EDITION_GROUP
	};
}

/**
 * Produces an action indicating that the publisher for the edition
 * being edited should be updated with the provided value.
 *
 * @param {Publisher} newPublisher - The new publisher object to be set for
 *                                   the edition.
 * @returns {Action} The resulting UPDATE_PUBLISHER action.
 */
export function updatePublisher(newPublisher: Publisher): Action {
	return {
		payload: newPublisher,
		type: UPDATE_PUBLISHER
	};
}

/**
 * Produces an action indicating that the Edition Group for the edition
 * being edited should be updated with the provided value.
 *
 * @param {EditionGroup} newEditionGroup - The new EditionGroup object to be set
 *                      for the edition.
 * @returns {Action} The resulting UPDATE_EDITION_GROUP action.
 */
export function updateEditionGroup(newEditionGroup: EditionGroup): Action {
	return {
		payload: newEditionGroup,
		type: UPDATE_EDITION_GROUP
	};
}

/**
 * Produces an action indicating that the weight for the edition
 * should be updated with the provided value. The action is marked to be
 * debounced by the keystroke debouncer defined for redux-debounce.
 *
 * @param {number} value - The new value to be used for the edition weight.
 * @returns {Action} The resulting UPDATE_WEIGHT action.
 */
export function debouncedUpdateWeight(value: ?number): Action {
	return {
		meta: {debounce: 'keystroke'},
		payload: value,
		type: UPDATE_WEIGHT
	};
}

/**
 * Produces an action indicating that the number of pages for the edition
 * should be updated with the provided value. The action is marked to be
 * debounced by the keystroke debouncer defined for redux-debounce.
 *
 * @param {number} value - The new value to be used for the number of pages.
 * @returns {Action} The resulting UPDATE_PAGES action.
 */
export function debouncedUpdatePages(value: ?number): Action {
	return {
		meta: {debounce: 'keystroke'},
		payload: value,
		type: UPDATE_PAGES
	};
}

/**
 * Produces an action indicating that the width for the edition
 * should be updated with the provided value. The action is marked to be
 * debounced by the keystroke debouncer defined for redux-debounce.
 *
 * @param {number} value - The new value to be used for the width.
 * @returns {Action} The resulting UPDATE_WIDTH action.
 */
export function debouncedUpdateWidth(value: ?number): Action {
	return {
		meta: {debounce: 'keystroke'},
		payload: value,
		type: UPDATE_WIDTH
	};
}

/**
 * Produces an action indicating that the height for the edition
 * should be updated with the provided value. The action is marked to be
 * debounced by the keystroke debouncer defined for redux-debounce.
 *
 * @param {number} value - The new value to be used for the height.
 * @returns {Action} The resulting UPDATE_HEIGHT action.
 */
export function debouncedUpdateHeight(value: ?number): Action {
	return {
		meta: {debounce: 'keystroke'},
		payload: value,
		type: UPDATE_HEIGHT
	};
}

/**
 * Produces an action indicating that the depth for the edition
 * should be updated with the provided value. The action is marked to be
 * debounced by the keystroke debouncer defined for redux-debounce.
 *
 * @param {number} value - The new value to be used for the depth.
 * @returns {Action} The resulting UPDATE_DEPTH action.
 */
export function debouncedUpdateDepth(value: ?number): Action {
	return {
		meta: {debounce: 'keystroke'},
		payload: value,
		type: UPDATE_DEPTH
	};
}
