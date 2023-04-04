const { SlashCommandBuilder } = require('discord.js');
const chatgpt = require('../../chatgpt');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('openai')
		.setDescription('Ask something to OpenAI')
		.addStringOption(option => option.setName('question').setDescription('Question to ask to OpenAI')),

	async execute(interaction) {
		const question = interaction.options.getString('question');
		if (question.length > 100) {
			return interaction.reply({ content: 'Question maximum size is 100 characters', ephemeral: true });
		}

		const response = await chatgpt.ask(question);
		
		return interaction.reply({ content: response.content, ephemeral: false });
	},
};
