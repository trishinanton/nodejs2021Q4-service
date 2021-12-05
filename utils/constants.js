const HTTP_STATUS_CODES = {
    OK: 200,
    CREATE: 201,
    DELETE: 204,
    INTERVAL_SERVER_ERROR: 500,
    NOT_FOUND: 404
};
const HTTP_RESPONSE_BODY = {
    USER_SUCCESS_ADDED: 'User success added',
    BOARD_SUCCESS_DELETE: 'Board success delete',
    BOARD_SUCCESS_BOARD: 'Board success added',
    TASK_SUCCESS_TASK: 'Task success added',
    INTERVAL_SERVER_ERROR: 'Interval error',
    TASK_NOT_FOUND: 'Task not found'
}

module.exports = {
    HTTP_STATUS_CODES,
    HTTP_RESPONSE_BODY
}