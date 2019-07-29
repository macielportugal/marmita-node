'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route
    .get('/', 'PackedLunchController.list')

Route
    .get('/:id', 'PackedLunchController.show')

Route
    .get('/api/v1/packed-lunch', 'PackedLunchController.apiList')

Route
    .get('/api/v1/packed-lunch/:id', 'PackedLunchController.apiShow')

Route
    .post('/api/v1/packed-lunch', 'PackedLunchController.apiCreate')
    .middleware(['auth:jwt'])

Route
    .put('/api/v1/packed-lunch/:id', 'PackedLunchController.apiUpdate')
    .middleware(['auth:jwt'])

Route
    .delete('/api/v1/packed-lunch/:id', 'PackedLunchController.apiDestroy')
    .middleware(['auth:jwt'])

Route.post('/api/v1/login', 'SessionController.create')

Route.post('/api/v1/logout', 'SessionController.logout')
