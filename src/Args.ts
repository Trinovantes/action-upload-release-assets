import * as core from '@actions/core'

export enum ArgName {
    FILES = 'files',
    RELEASE_ID = 'release_id',
    UPLOAD_URL = 'upload_url',
}

export interface Args {
    releaseId: number
    uploadUrl: string
    files: Array<string>
}

export function getAndValidateArgs(): Args {
    const inputFilesStr = core.getInput(ArgName.FILES, { required: true })
    const args: Args = {
        releaseId: JSON.parse(core.getInput(ArgName.RELEASE_ID, { required: true })) as number,
        uploadUrl: core.getInput(ArgName.UPLOAD_URL, { required: true }),
        files: inputFilesStr.split(/\r?\n/),
    }

    return args
}
