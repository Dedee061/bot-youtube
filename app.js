const { Client, GatewayIntentBits, Partials, Embed, EmbedBuilder } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
    ],
    Partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User
    ]
});

const {token} = require('./config.json')

client.on('ready', async () => {

    let commands 
    commands = client.application.commands;

    commands.create({
        name: 'ping',
        description: 'responder com pong'
    })

    console.log(`Bot esta online ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    // Verificar se tem um comando
    if( interaction.isCommand()) {

        if(interaction.commandName == 'ping') {
            // console.log('Pong')


            const embed = new EmbedBuilder()
            .setTitle('✅Repondeu')
            .setDescription('\n\n Respondendo com **PONG!!**')
            .setColor('#ff00ff')

            await interaction.reply({embeds: [embed]})
        }

    }
})


client.login(token)