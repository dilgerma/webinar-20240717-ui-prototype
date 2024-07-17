"use client"
import Head from 'next/head';
import React from 'react';
// @ts-ignore
import {CommandSelection} from '@/app/components/commandselection/CommandSelection';
import {ReadModelSelection} from '@/app/components/commandselection/ReadModelSelection';


import AddedTodosReadModel from './AddedTodosReadModel'

export default function Screen(props: any) {

    return (

        <div className="content container">

            <div className="content container">
                <Head>
                    <title>Screen</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main>
                    <div className={"columns"}>
                        {[]?.length > 0 ? <div className={"column"}>
                            <CommandSelection commands={[]}/>
                        </div> : <span/>}
                        {[{
                                "readModel":"AddedTodosReadModel",
                                "endpoint": "/todolist" ,
                                "readModelView" : AddedTodosReadModel
                                
                            }]?.length > 0 ? <div className={"column"}>
                            <ReadModelSelection aggregateId={props.aggregateId} readModels={[{
                                "readModel":"AddedTodosReadModel",
                                "endpoint": "/todolist" ,
                                "readModelView" : AddedTodosReadModel
                                
                            }]}/>
                        </div> : <span/> }
                    </div>
                </main>
            </div>
        </div>

    );
}
