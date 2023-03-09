module.exports = ({ env }) => ({
    upload: {
        config: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
                Bucket: env('AWS_BUCKET'),
            },
        },
        actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
        },
        },
    },
    deepl: {
        enabled: true,
        config: {
          // your DeepL API key
          apiKey: 'fa2ced8f-cbeb-5b4c-376a-1036e5d92770',
          // whether to use the free or paid api, default true
          freeApi: false,
          // Which field types are translated (default string, text, richtext, components and dynamiczones)
          translatedFieldTypes: [
            'string',
            'text',
            'richtext',
            'component',
            'dynamiczone',
          ],
          // If relations should be translated (default true)
          translateRelations: false,
        },
    },
});