const { SlashCommandBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('openai')
		.setDescription('Ask something to OpenAI')
		.addStringOption(option => option.setName('question').setDescription('Question to ask to OpenAI')),

	async execute(interaction) {
		const question = interaction.options.getString('question');

		if (question.length > 20) {
			return interaction.reply({ content: 'Question maximum size is 20 characters', ephemeral: true });
		}
	

		return interaction.reply({ content: `Your question was ${question}`, ephemeral: false });
	},
};
