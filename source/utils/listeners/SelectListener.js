class SelectListener extends EventListener {
    constructor(client, interaction) {
        // Call the super constructor.
        super(client, interaction);
        this.client = client;
        this.interaction = interaction;
    }


    CustomID() {
        return this.interaction.customID;
    }
}
export default SelectListener;