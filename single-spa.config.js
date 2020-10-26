import {
    registerApplication,
    start
} from 'single-spa'

registerApplication(
    'todos_app',
    () => import('./packages/todos_app'),
    location => location.pathname === '/todos_app',
)

registerApplication(
    'weather_app',
    () => import('./packages/weather_app'),
    location => location.pathname === '/weather_app',
)

start()