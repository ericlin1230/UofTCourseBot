module.exports = (client) => {
        client.user.setActivity(`?help / ?helpdm`);
        console.log(`Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`);
} 