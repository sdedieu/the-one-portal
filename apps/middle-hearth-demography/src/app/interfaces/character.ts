export type Characters = Character[]

export type CharacterRace = 'Human' | 'Elf' | 'Dwarf' | 'Hobbit' | 'Maiar' | 'Ent' | 'Orcs' | 'Dragon' | 'NaN' | 'Elves' | 'Men' | 'Dragons' | 'Great Spiders' | 'Black Uruk' | 'Ainur' | 'Raven' | 'Dwarves' | 'Men|Wraith' | 'God' | 'Wolfhound' | 'Half-elven' | 'Werewolves' | 'Goblin|Orc' | 'Horse' | 'Orc' | 'Eagles' | 'Uruk-hai' | 'Great Eagles' | 'Maiar|Balrogs' | 'Hobbits' | 'Uruk-hai|Orc' | 'Orc|Goblin' | 'Urulóki' | 'Ents' | 'Balrog' | 'Eagle' | 'Stone-trolls' | 'Vampire' | ''
export type CharacterRaceFilter = CharacterRace | 'others';
export type CharacterGender = 'Male' | 'Female';
export type CharacterRealm = 'Númenor' | 'Rohan' | 'Gondor' | 'Arthedain' | 'Lórien' | 'Estolad' | 'Reunited Kingdom,Arnor,Gondor' | 'Arnor' | 'Arthedain,Arnor' | 'TA 2' | 'Arnor,Arthedain' | 'Reunited Kingdom' | 'Dale' | 'Dale,Lake-town' | 'Lake-town,Dale,Rhûn,Dorwinion' | 'Dale,Laketown' | 'Buckland' | 'Eregion,Lothlórien,Caras Galadhon' | 'Eregion' | 'Himlad' | 'Ossiriand' | 'Khazad-dum' | 'Grey Mountains' | 'Lonely Mountain' | 'Arnor,Gondor' | 'Rivendell' | 'Nan Elmoth' | 'Tirion' | 'Hithlum,Beleriand' | 'Hithlum' | 'Tirion,Formenos' | 'Minas Ithil' | 'Shire' | 'Havens of Sirion,Lindon' | 'Brethil' | 'Valinor,Taniquetil' | 'Lake-town' | 'Tol Eressëa' | 'Khazad-dûm' | 'Tol Eressëa,Alqualondë' | 'Nargothrond' | 'Woodland Realm' | 'Bree' | 'White Mountains,Paths of the Dead' | 'Woodland Realm,Mirkwood' | 'Ered Luin' | 'Lonely Mountain,Iron Hills' | 'Grey Mountains,Lonely Mountain' | 'Lonely Mountain,Grey Mountains' | 'Nevrast,Gondolin' | 'Rhovanion' | 'Doriath' | 'Isengard,Nan Curunír' | 'Torech Ungol' | 'Cirith Ungol' | 'Rhûn,Dol Guldur,Sauron' | 'Timeless Halls' | 'Pastures of Yavanna' | 'Old Forest' | 'Valinor,Halls of Nienna' | 'Valinor' | 'Utumno,Angband,Middle-earth,Beleriand' | 'Isengard,Saruman' | 'Arda,Valinor' | 'Minas Morgul,the Witch-King' | 'Mount Gram' | 'Angband' | 'Angmar,Minas Morgul,Osgiliath' | 'Doors of Durin' | 'Arda' | 'Valinor,Halls of Mandos' | 'Valinor,Ulmonan' | 'Isengard' | 'Valinor,House of Tulkas' | 'Moria,Mount Gundabad' | 'NaN'

export interface Character {
    _id: string, 
    height: string, 
    race: CharacterRace, 
    gender: CharacterGender, 
    birth: string, 
    spouse: string, 
    death: string, 
    realm: CharacterRealm, 
    hair: string, 
    name: string, 
    wikiUrl: string 
}
