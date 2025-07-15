import BlazeRod from '@src/assets/guildImage/blaze_rod.png';
import CherryWood from '@src/assets/guildImage/cherry_wood.png';
import EnderPearl from '@src/assets/guildImage/ender_pearl.png';
import GrassBlock from '@src/assets/guildImage/grass_block.png';
import NetheriteBlock from '@src/assets/guildImage/netherite_block.png';
import GrayConcrete from '@src/assets/guildImage/gray_concrete.png';
import Netherrack from '@src/assets/guildImage/netherrack.png';
import OakWood from '@src/assets/guildImage/oak_wood.png';
import Obsidian from '@src/assets/guildImage/obsidian.png';
import RedstoneBlock from '@src/assets/guildImage/redstone_block.png';

export type GuildImageType = 'blaze_rod' | 'cherry_wood' | 'ender_pearl' | 'grass_block' | 'netherite_block' | 'gray_concrete' | 'oak_wook' | 'obsidian' | 'redstone_block' | 'netherrack';
const GuildImageObject: Record<GuildImageType, string> = {
  'blaze_rod': BlazeRod,
  'cherry_wood': CherryWood,
  'ender_pearl': EnderPearl,
  'grass_block': GrassBlock,
  'netherite_block': NetheriteBlock,
  'netherrack': Netherrack,
  'oak_wook': OakWood,
  'obsidian': Obsidian,
  'redstone_block': RedstoneBlock,
  'gray_concrete': GrayConcrete
}

const GuildImage = ({ imageName }: { imageName: GuildImageType }) => {
  return (
    <img src={GuildImageObject[imageName]} alt="guildImg" />
  )
}

export default GuildImage