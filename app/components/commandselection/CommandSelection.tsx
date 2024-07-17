import {useEffect, useState} from "react"
import {JsonForm} from '@/app/components/commandselection/JsonForm';
import {CommandConfig} from '@/app/core/types'
import {parseEndpoint} from '@/app/components/util/parseEndpoint';

export const CommandSelection = (props: { commands: CommandConfig[] }) => {
    const [selectedCommandConfig, setSelectedCommand] = useState<CommandConfig | undefined>()
    const [errorMode, setErrorMode] = useState(false)
    const [error, setError] = useState("")
    return <div>

        {errorMode ? <div className={"notification is-danger"}>Fehler in Command-Verarbeitung<br/>{error}</div> :
            <span/>}
        <div className={"fixed-grid"}>
            <div className="grid">
                {props.commands.map((command: CommandConfig, idx: number) => {
                    return <div>
                        <div className={"cell command"} key={idx}
                             onClick={() => setSelectedCommand(props.commands?.find(it => it.command == command.command))}>
                            <h3>Command</h3>
                            <div>
                                {command?.command}</div>
                            <div className={"cell"}/>
                        </div>
                        <div className={"top-margin"}/>
                    </div>
                })}
            </div>
        </div>

        <div>
            {selectedCommandConfig ? <JsonForm schema={selectedCommandConfig.schema} handleCommand={(command: any) => {
                setErrorMode(false)
                fetch(parseEndpoint(selectedCommandConfig.endpoint, command.data), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(command.data)
                })
                    .catch((error: any) => {
                        setErrorMode(true);
                        setErrorMode(error)
                    });
            }}/> : <span/>}
        </div>
    </div>
}

