type GuildImage = 'blaze_rod' | 'cherry_wood' | 'ender_pearl' | 'grass_block' | 'netherite_block' | 'gray_concrete' | 'oak_wook' | 'obsidian' | 'redstone_block' | 'netherrack';

const GuildImage = ({ imageName }: { imageName: string }) => {
  return (
    <img src={`./src/assets/guildImage/${imageName}.png'`} alt="guildImg" />
  )
}

export default GuildImage