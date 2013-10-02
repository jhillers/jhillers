var require = {
    'baseUrl': './scripts/',

    'paths': {
        'jquery': '../components/jquery/jquery',
        'angular': '../components/angular/angular',
        'angular-resource': '../components/angular-resource/angular-resource',
        'angular-cookies': '../components/angular-cookies/angular-cookies',
        'angular-sanitize': '../components/angular-sanitize/angular-sanitize'
    },

    'shim': {
        'angular': {'exports': 'angular'},
        'angular-cookies': {
            'deps': ['angular']
        },
        'angular-resource': {
            'deps': ['angular']
        },
        'angular-sanitize': {
            'deps': ['angular']
        }
    },
    'priority': [
        'angular'
    ]
};
