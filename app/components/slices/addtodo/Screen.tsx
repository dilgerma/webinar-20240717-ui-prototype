"use client"
import Head from 'next/head';
import React from 'react';
// @ts-ignore
import {CommandSelection} from '@/app/components/commandselection/CommandSelection';
import {ReadModelSelection} from '@/app/components/commandselection/ReadModelSelection';

import AddTodoCommandSchema from './AddTodoCommand.json'


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
                        {[{
                    "command":"AddTodoCommand",
                    "endpoint": "/addtodo/{aggregateId}",
                    "schema": AddTodoCommandSchema
                }]?.length > 0 ? <div className={"column"}>
                            <CommandSelection commands={[{
                    "command":"AddTodoCommand",
                    "endpoint": "/addtodo/{aggregateId}",
                    "schema": AddTodoCommandSchema
                }]}/>
                        </div> : <span/>}
                        {[]?.length > 0 ? <div className={"column"}>
                            <ReadModelSelection aggregateId={props.aggregateId} readModels={[]}/>
                        </div> : <span/> }
                    </div>
                </main>
            </div>
        </div>

    );
}
