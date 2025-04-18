'use strict';

import { Css } from './components/core/Css.js';
import { Responsive } from './components/core/Responsive.js';
import { TranslateCore } from './components/core/Translate.js';
import { LogInUnderpost } from './components/underpost/LogInUnderpost.js';
import { LogOutUnderpost } from './components/underpost/LogOutUnderpost.js';
import { SignUpUnderpost } from './components/underpost/SignUpUnderpost.js';
import { MenuUnderpost } from './components/underpost/MenuUnderpost.js';
import { RouterUnderpost } from './components/underpost/RoutesUnderpost.js';
import { TranslateUnderpost } from './components/underpost/TranslateUnderpost.js';
import { Worker } from './components/core/Worker.js';
import { UnderpostParams } from './components/underpost/CommonUnderpost.js';
import { Keyboard } from './components/core/Keyboard.js';
import { SocketIoUnderpost } from './components/underpost/SocketIoUnderpost.js';
import { SocketIo } from './components/core/SocketIo.js';
import { ElementsUnderpost } from './components/underpost/ElementsUnderpost.js';
import { Scroll } from './components/core/Scroll.js';

window.onload = () =>
  Worker.instance({
    router: RouterUnderpost,
    render: async () => {
      await Css.loadThemes();
      await TranslateCore.Init();
      await TranslateUnderpost.Init();
      await Responsive.Init();
      await MenuUnderpost.Render();
      await SocketIo.Init({ channels: ElementsUnderpost.Data });
      await SocketIoUnderpost.Init();
      await LogInUnderpost();
      await LogOutUnderpost();
      await SignUpUnderpost();
      await Scroll.pullTopRefresh();
      await Keyboard.Init({ callBackTime: UnderpostParams.EVENT_CALLBACK_TIME });
    },
  });
