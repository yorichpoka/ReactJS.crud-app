import notify from 'devextreme/ui/notify';

export function notificationError(message = '', duration = 4000) {
    notify({ message: message, width: 300 }, 'error', duration);
}

export function notificationSuccess(message = '', duration = 4000) {
    notify({ message: message, width: 300 }, 'success', duration);
}

export function notificationInfo(message = '', duration = 4000) {
    notify({ message: message, width: 300 }, 'info', duration);
}