import React from "react"
import { Route } from "react-router-dom"
import { BrewSpellsProvider } from "./brewSpells/BrewSpellsDataProvider"
import BrewSpellsList from "./brewSpells/BrewSpellsList"
import { BrewMonstersProvider } from "./brewMonsters/BrewMonstersDataProvider"
import BrewMonstersList from "./brewMonsters/BrewMonstersList"
import BrewSpellsDetails from "./brewSpells/BrewSpellsDetails"
import BrewMonstersDetails from "./brewMonsters/BrewMonstersDetails"
import BrewSpellsForm from "./brewSpells/BrewSpellsForm"




export default (props) => {
    return (
        <>


            <BrewMonstersProvider>
                <BrewSpellsProvider>
                    <Route path="/brewery">
                        <div>
                            <button onClick={() => props.history.push("/brewery/spellList")}>
                                Spells
                        </button>
                        </div>
                    </Route>

                    <Route path="/spellList">
                        <div>
                            <button onClick={() => props.history.push("/brewery/spellList")}>
                                Spells
                        </button>
                        </div>
                    </Route>

                    <Route path="/monsterList">
                        <div>
                            <button onClick={() => props.history.push("/spellList")}>
                                Spells
                        </button>
                        </div>
                    </Route>

                    <Route path="/monsterList">
                        <div>
                            <button onClick={() => props.history.push("/brewery/monsterList")}>
                                Monsters
                        </button>
                        </div>
                    </Route>

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

                    <Route exact path="/brewery/monsterList/:brewMonstersId(\d+)" render={
                        props => <BrewMonstersDetails {...props} />
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

                    <Route path="/brewery/monsterList/" render={
                        props => <BrewMonstersList {...props}/>
                    }/>



                </BrewSpellsProvider>


            </BrewMonstersProvider>












        </>
    )
}