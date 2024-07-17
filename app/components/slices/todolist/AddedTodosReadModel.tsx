"use client"
// @ts-ignore
import DataTable from '@/app/components/commandselection/DataTable';


export default function AddedTodosReadModel(props: any) {

    return <DataTable aggregateId={props.aggregateId} endpoint={props.endpoint}/>
}



