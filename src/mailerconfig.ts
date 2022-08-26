import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export = {
    transport: `smtp://${process.env.MAIL_CONFIG_USERNAME}:${process.env.MAIL_CONFIG_PASSWORD}@localhost:2500`,
    defaults: {
        from: 'YourTodoApp@todo.com',
        template: {
            dir: './templates/email',
            adapter: new HandlebarsAdapter(),
            options: {
                strict: true,
            },
        },
    },
};