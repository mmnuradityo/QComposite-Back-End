const Hapi = require('@hapi/hapi');
const { getUser, validate } = require('./userdata');

const port = 5000;
const developmentHost = '192.168.43.152';
const productionpHost = '0.0.0.0';

const getHost = () => process.env.NODE_ENV !== 'production' ? developmentHost : productionpHost;

const init = async () => {
    const server = Hapi.server({
        port: port,
        host: getHost()
    });

    server.route([
        {
            method: 'POST',
            path: '/login-mobile',
            handler: async (request, h) => {
                const { email, password, appID } = request.payload;

                console.log(`
                    email: ${email},
                    password: ${password},
                    appID: ${appID},
                    `)

                var response;
                if (validate(email, password, appID)) {
                    response = h.response({
                        status: 'success',
                        user: getUser(email)
                    });
                    response.code(200);

                } else {
                    response = h.response({
                        status: 'fail',
                        message: 'User not found!',
                    });
                    response.code(404);
                }
                return response;
            }
        }
    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();