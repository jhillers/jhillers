var require = {
    'baseUrl': './scripts/',

    'paths': {
        'jquery': '../components/jquery/jquery',
        'angular': '../components/angular/angular',
        'processing':"../components/processingjs/processing",
        'angular-resource': '../components/angular-resource/angular-resource',
        'angular-cookies': '../components/angular-cookies/angular-cookies',
        'angular-sanitize': '../components/angular-sanitize/angular-sanitize'
    },

    'shim': {
        'processing':{'exports': 'processing'},
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
