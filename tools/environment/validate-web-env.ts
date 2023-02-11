import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'
import { IWebEnv, webEnv } from '../../apps/web/environments/environment'

import { IsBoolean, IsUrl, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import 'reflect-metadata'

export class WebEnvVo implements IWebEnv {
  @IsBoolean()
  public isProd: boolean

  @ValidateNested()
  @Type(() => WebEnvApiVo)
  public api: WebEnvApiVo
}

class WebEnvApiVo {
  @IsUrl({ require_tld: false })
  public gqlUrl: string
}

const webEnvVoInstance = plainToInstance(WebEnvVo, webEnv)
const errors = validateSync(webEnvVoInstance)

if (errors.length) {
  console.error(errors)
  process.exit(1)
}
