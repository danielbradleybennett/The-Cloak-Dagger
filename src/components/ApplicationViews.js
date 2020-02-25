import React from "react"
import { Button } from "react-bootstrap"
import "./ApplicationView.css"
import { Route } from "react-router-dom"
import { BrewSpellsProvider } from "./brewSpells/BrewSpellsDataProvider"
import BrewSpellsList from "./brewSpells/BrewSpellsList"
import { BrewMonstersProvider } from "./brewMonsters/BrewMonstersDataProvider"
import BrewMonstersList from "./brewMonsters/BrewMonstersList"
import BrewSpellsDetails from "./brewSpells/BrewSpellsDetails"
import BrewMonstersDetails from "./brewMonsters/BrewMonstersDetails"
import BrewSpellsForm from "./brewSpells/BrewSpellsForm"
import BrewMonstersForm from "./brewMonsters/BrewMonstersForm"
import { NotesProvider } from "./notes/NotesDataProvider"
import { TheWorldProvider } from "./world/TheWorldDataProvider"
import NotesDetails from "./notes/NotesDetails"
import NotesList from "./notes/NotesList"
import NotesForm from "./notes/NotesForm"
import TheWorldDetails from "./world/TheWorldDetails"
import TheWorldList from "./world/TheWorldList"
import TheWorldForm from "./world/TheWorldForm"
import { SpellTypeProvider } from "./brewSpells/SpellTypeProvider"
import { SpellSpellCasterProvider } from "./brewSpells/SpellSpellCasterProvider"
import { SpellCasterProvider } from "./brewSpells/SpellCasterProvider"
import { BrewWeaponsProvider } from "./BrewWeapons/BrewWeaponsDataProvider"
import BrewWeaponsDetails from "./BrewWeapons/BrewWeaponsDetails"
import BrewWeaponsList from "./BrewWeapons/BrewWeaponsList"
import BrewWeaponsForm from "./BrewWeapons/BrewWeaponsForm"
import BrewItemsDetails from "./items/BrewItemsDetails"
import BrewItemsList from "./items/BrewItemsList"
import BrewItemsForm from "./items/BrewItemsForm"
import { BrewItemsProvider } from "./items/BrewItemsDataProvider"
import BrewArmorDetails from "./armor/BrewArmorDetails"
import BrewArmorList from "./armor/BrewArmorList"
import BrewArmorForm from "./armor/BrewArmorForm"
import { BrewArmorProvider } from "./armor/BrewArmorDataProvider"
// import MonstersList from "./monsters/MonstersList"

import Library from "./library/Library"
import OpenSpellsDetails from "./spells/OpenSpellsDetails"
import OpenMonstersDetails from "./monsters/OpenMonstersDetails"
import OpenConditionsDetails from "./conditions/OpenConditionsDetails"
import OpenWeaponsDetails from "./weapons/OpenWeaponsDetails"
import OpenMagicItemsDetails from "./magic-items/OpenMagicItemsDetails"
import OpenRacesDetails from "./races/OpenRacesDetails"
import OpenClassesDetails from "./classes/OpenClassesDetails"




export default (props) => {
    return (
        <>


            <SpellCasterProvider>
                <SpellSpellCasterProvider>
                    <BrewMonstersProvider>
                        <BrewSpellsProvider>
                            <TheWorldProvider>
                                <NotesProvider>
                                    <SpellTypeProvider>
                                        <BrewWeaponsProvider>
                                            <BrewItemsProvider>
                                                <BrewArmorProvider>







                                                    <section className="note_world">
                                                        <Route path="/lore">
                                                            <div>
                                                                <Button className="button__notes btn btn-light btn-sm" onClick={() => props.history.push("/lore/notesList")}>
                                                                    Notes
                                                            </Button>
                                                            </div>
                                                        </Route>
                                                        <Route path="/lore">
                                                            <div>
                                                                <button className="button__world btn btn-light btn-sm" onClick={() => props.history.push("/lore/worldList")}>
                                                                    The World
                                                        </button>
                                                            </div>
                                                        </Route>

                                                    </section>

                                                    <section className="Button">
                                                        <Route path="/brewery">
                                                            <div>
                                                                <Button className="button__spells btn btn-light btn-sm" onClick={() => props.history.push("/brewery/spellList")}>
                                                                    Spells
                                                                </Button>
                                                            </div>
                                                        </Route>
                                                        <Route path="/brewery">
                                                            <div>
                                                                <Button className="button__monsters btn btn-light btn-sm" onClick={() => props.history.push("/brewery/monsterList")}>
                                                                    Monsters
                                                                </Button>
                                                            </div>
                                                        </Route>
                                                        <Route path="/brewery">
                                                            <div>
                                                                <Button className="button__weapons btn btn-light btn-sm" onClick={() => props.history.push("/brewery/weaponList")}>
                                                                    Weapons
                                                                </Button>
                                                            </div>
                                                        </Route>
                                                        <Route path="/brewery">
                                                            <div>
                                                                <Button className="button__items btn btn-light btn-sm" onClick={() => props.history.push("/brewery/itemList")}>
                                                                    Items
                                                                </Button>
                                                            </div>
                                                        </Route>
                                                        <Route path="/brewery">
                                                            <div>
                                                                <Button className="button__armor btn btn-light btn-sm" onClick={() => props.history.push("/brewery/armorList")}>
                                                                    Armor
                                                                </Button>
                                                            </div>
                                                        </Route>
                                                    </section>



                                                    {/* The Spells Routes */}
                                                    <Route exact path="/brewery/spellList/:brewSpellsId(\d+)" render={
                                                        props => <BrewSpellsDetails {...props} />
                                                    } />

                                                    <Route exact path="/brewery/spellList/create" render={
                                                        props => <BrewSpellsForm {...props} />
                                                    } />


                                                    <Route exact path="/brewery/spellList/edit/:brewSpellsId(\d+)" render={
                                                        props => <BrewSpellsForm {...props} />
                                                    } />


                                                    <Route exact path="/brewery/spellList/" render={
                                                        props => <BrewSpellsList {...props} />
                                                    } />
                                                    {/* The Monsters Routes */}
                                                    <Route exact path="/brewery/monsterList/:brewMonstersId(\d+)" render={
                                                        props => <BrewMonstersDetails {...props} />
                                                    } />

                                                    <Route exact path="/brewery/monsterList/" render={
                                                        props => <BrewMonstersList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/monsterList/create" render={
                                                        props => <BrewMonstersForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/monsterList/edit/:brewMonstersId(\d+)" render={
                                                        props => <BrewMonstersForm {...props} />
                                                    } />
                                                    {/* The Notes Routes */}
                                                    <Route exact path="/lore/notesList/edit/:notesId(\d+)" render={
                                                        props => <NotesForm {...props} />
                                                    } />

                                                    <Route exact path="/lore/notesList/create" render={
                                                        props => <NotesForm {...props} />
                                                    } />

                                                    <Route exact path="/lore/notesList/" render={
                                                        props => <NotesList {...props} />
                                                    } />

                                                    <Route exact path="/lore/notesList/:notesId(\d+)" render={
                                                        props => <NotesDetails {...props} />
                                                    } />
                                                    {/* The World Routes */}
                                                    <Route exact path="/lore/worldList/edit/:theWorldId(\d+)" render={
                                                        props => <TheWorldForm {...props} />
                                                    } />

                                                    <Route exact path="/lore/worldList/create" render={
                                                        props => <TheWorldForm {...props} />
                                                    } />

                                                    <Route exact path="/lore/worldList/" render={
                                                        props => <TheWorldList {...props} />
                                                    } />

                                                    <Route exact path="/lore/worldList/:theWorldId(\d+)" render={
                                                        props => <TheWorldDetails {...props} />
                                                    } />
                                                    {/* Weapons Routes */}
                                                    <Route exact path="/brewery/weaponList/edit/:brewWeaponsId(\d+)" render={
                                                        props => <BrewWeaponsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/weaponList/create" render={
                                                        props => <BrewWeaponsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/weaponList/" render={
                                                        props => <BrewWeaponsList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/weaponList/:brewWeaponsId(\d+)" render={
                                                        props => <BrewWeaponsDetails {...props} />
                                                    } />
                                                    {/* Item Routes */}
                                                    <Route exact path="/brewery/itemList/edit/:brewItemsId(\d+)" render={
                                                        props => <BrewItemsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/itemList/create" render={
                                                        props => <BrewItemsForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/itemList/" render={
                                                        props => <BrewItemsList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/itemList/:brewItemsId(\d+)" render={
                                                        props => <BrewItemsDetails {...props} />
                                                    } />

                                                    {/* Armor Routes */}
                                                    <Route exact path="/brewery/armorList/edit/:brewArmorId(\d+)" render={
                                                        props => <BrewArmorForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/armorList/create" render={
                                                        props => <BrewArmorForm {...props} />
                                                    } />

                                                    <Route exact path="/brewery/armorList/" render={
                                                        props => <BrewArmorList {...props} />
                                                    } />

                                                    <Route exact path="/brewery/armorList/:brewArmorId(\d+)" render={
                                                        props => <BrewArmorDetails {...props} />
                                                    } />

                                                    <Route exact path="/library/" render={
                                                        props => <Library {...props} />
                                                    } />


                                                    {/* Open5e Spells */}
                                                    <Route exact path="/library/spells/:spellSlug" render={
                                                        props => <OpenSpellsDetails {...props} />
                                                    } />

                                                    {/* Open5e Monsters */}
                                                    <Route exact path="/library/monsters/:monsterSlug" render={
                                                        props => <OpenMonstersDetails {...props} />
                                                    } />

                                                    {/* Open5e Conditions */}
                                                    <Route exact path="/library/conditions/:conditionSlug" render={
                                                        props => <OpenConditionsDetails {...props} />
                                                    } />

                                                    {/* Open5e Weapons */}
                                                    <Route exact path="/library/weapons/:weaponSlug" render={
                                                        props => <OpenWeaponsDetails {...props} />
                                                    } />

                                                    {/* Open5e MagicItems */}
                                                    <Route exact path="/library/magicitems/:magicItemSlug" render={
                                                        props => <OpenMagicItemsDetails {...props} />
                                                    } />

                                                    {/* Open5e Races */}
                                                    <Route exact path="/library/races/:raceSlug" render={
                                                        props => <OpenRacesDetails {...props} />
                                                    } />

                                                    {/* Open5e Races */}
                                                    <Route exact path="/library/classes/:classSlug" render={
                                                        props => <OpenClassesDetails {...props} />
                                                    } />







                                                </BrewArmorProvider>
                                            </BrewItemsProvider>
                                        </BrewWeaponsProvider>
                                    </SpellTypeProvider>
                                </NotesProvider>
                            </TheWorldProvider>
                        </BrewSpellsProvider>
                    </BrewMonstersProvider>
                </SpellSpellCasterProvider>
            </SpellCasterProvider>













        </>
    )
}