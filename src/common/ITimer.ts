// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export interface ITimer {
    /**
     * start timer
     *
     * @param {number} delay
     * @param {(...args: any[]) => any} successCallback
     * @returns {*}
     *
     * @memberOf ITimer
     */
    start(): void;

    /**
     * stops timer
     *
     * @param {*} timerId
     *
     * @memberOf ITimer
     */
    stop(): void;
}
