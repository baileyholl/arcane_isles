ServerEvents.recipes(event => {

  // Reduce the cost of foci to pre-nether levels.
  // This recipe is still post-islands and requires mob farming.

  event.remove({output: 'hexcasting:focus'});

  event.shaped('hexcasting:focus', [
    'LPP',
    'PCP',
    'PPL'
  ], {
    P: 'minecraft:paper',
    L: 'minecraft:leather',
    C: 'hexcasting:charged_amethyst'
  });
})