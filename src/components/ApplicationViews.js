import React from "react"
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



export default (props) => {
    return (
        <>




            <BrewMonstersProvider>
                <BrewSpellsProvider>
                    <TheWorldProvider>
                        <NotesProvider>

                            <Route path="/vyasa">
                                <div>
                                    <button onClick={() => props.history.push("/vyasa/notesList")}>
                                        Notes
                                </button>
                                </div>
                            </Route>

                            <Route path="/vyasa">
                                <div>
                                    <button onClick={() => props.history.push("/vyasa/worldList")}>
                                        The World
                                </button>
                                </div>
                            </Route>



                            <Route path="/brewery">
                                <div>
                                    <button onClick={() => props.history.push("/brewery/spellList")}>
                                        Spells
                                </button>
                                </div>
                            </Route>

                            {/* <Route path="/spellList">
                        <div>
                            <button onClick={() => props.history.push("/brewery/spellList")}>
                                Spells
                        </button>
                        </div>
                    </Route> */}

                            {/* <Route path="/monsterList">
                        <div>
                            <button onClick={() => props.history.push("/spellList")}>
                                Spells
                        </button>
                        </div>
                    </Route> */}

                            {/* <Route path="/monsterList">
                        <div>
                            <button onClick={() => props.history.push("/brewery/monsterList")}>
                                Monsters
                        </button>
                        </div>
                    </Route> */}

                            <Route path="/brewery">
                                <div>
                                    <button onClick={() => props.history.push("/brewery/monsterList")}>
                                        Monsters
                                </button>
                                </div>
                            </Route>



                            <Route path="/spellList">
                                <div>
                                    <button onClick={() => props.history.push("/monsterList")}>
                                        Monsters
                                </button>
                                </div>
                            </Route>




                            <Route exact path="/brewery/spellList/:brewSpellsId(\d+)" render={
                                props => <BrewSpellsDetails {...props} />
                            } />


                            <Route exact path="/brewery/spellList/create" render={
                                props => <BrewSpellsForm {...props} />
                            } />

                            <Route exact path="/brewery/spellList/create" render={
                                props => <BrewSpellsList {...props} />
                            } />

                            <Route path="/brewery/spellList/edit/:brewSpellsId(\d+)" render={
                                props => <BrewSpellsForm {...props} />
                            } />


                            <Route exact path="/brewery/spellList/" render={
                                props => <BrewSpellsList {...props} />
                            } />

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

                            <Route exact path="/vyasa/notesList/edit/:notesId(\d+)" render={
                                props => <NotesForm {...props} />
                            } />

                            <Route exact path="/vyasa/notesList/create" render={
                                props => <NotesForm {...props} />
                            } />

                            <Route exact path="/vyasa/notesList/" render={
                                props => <NotesList {...props} />
                            } />

                            <Route exact path="/vyasa/notesList/:notesId(\d+)" render={
                                props => <NotesDetails {...props} />
                            } />

                            <Route exact path="/vyasa/worldList/edit/:theWorldId(\d+)" render={
                                props => <TheWorldForm {...props} />
                            } />

                            <Route exact path="/vyasa/worldList/create" render={
                                props => <TheWorldForm {...props} />
                            } />

                            <Route exact path="/vyasa/worldList/" render={
                                props => <TheWorldList {...props} />
                            } />

                            <Route exact path="/vyasa/worldList/:theWorldId(\d+)" render={
                                props => <TheWorldDetails {...props} />
                            } />


                        </NotesProvider>
                    </TheWorldProvider>
                </BrewSpellsProvider>
            </BrewMonstersProvider>












        </>
    )
}