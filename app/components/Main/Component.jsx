import React from 'react';
import PropTypes from 'prop-types';

import ComponentWithBemHelper from 'Utils/ComponentWithBemHelper';

class Component extends ComponentWithBemHelper{
  render(){
    return (
      <div {...this.classes()}>
        <h1>Lorem Ipsum</h1>
        <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
        <h5>"Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль.."</h5>
        <p><input type="text" /></p>
        <p>Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ligula nisl. Suspendisse ultricies eros id augue vestibulum, vitae accumsan metus dignissim. Morbi a nulla eros. Vivamus finibus nisi massa, imperdiet vehicula tortor tempor posuere. Maecenas molestie, lectus eu convallis tristique, erat quam convallis dui, ac facilisis justo quam ac lectus. Praesent gravida felis quis sapien rhoncus gravida. Curabitur pharetra pharetra lectus, sit amet dictum quam vestibulum sit amet.
        </p>
        <p>
        In blandit viverra condimentum. Ut massa eros, hendrerit ut vestibulum a, dictum ut diam. Etiam venenatis dictum metus eget eleifend. Ut iaculis pellentesque urna. Mauris justo arcu, pellentesque vitae fringilla euismod, varius vitae ante. Fusce justo ex, mattis sit amet finibus quis, aliquet eget dui. Curabitur vel viverra tortor, sit amet euismod ipsum. Maecenas diam mauris, consequat et varius eget, placerat et purus. Integer vestibulum, dui ut rutrum vulputate, tellus tortor pulvinar libero, sit amet imperdiet lacus tellus quis magna. In euismod quam a sem dignissim facilisis at nec dui. Mauris eleifend commodo eros sit amet varius. Etiam sollicitudin risus ex, faucibus euismod mauris bibendum at. Sed ac ex iaculis, ultrices erat non, viverra ante. Morbi vitae nulla dignissim, gravida nulla sit amet, eleifend massa. Aliquam ultricies augue nec tellus condimentum, et volutpat lacus molestie.
        </p>
        <p>
        In mollis id sem eu semper. Vivamus sed feugiat augue. Maecenas sed pulvinar nunc, at efficitur ex. Integer auctor urna ut lacus feugiat sollicitudin. Ut laoreet posuere odio, eget commodo arcu maximus eu. Suspendisse pulvinar, velit et consequat pharetra, massa diam efficitur tortor, et pretium ligula leo eu ex. Aliquam lobortis mattis urna consequat placerat. Vivamus sit amet felis a nibh faucibus pretium. Nam ac odio dolor. Integer non molestie risus. Sed non lacus sapien. In eget eros et erat condimentum egestas et maximus augue. Quisque eget nulla sed mi vestibulum feugiat in nec tellus.
        </p>
        <p>
        Integer non felis nunc. Suspendisse felis arcu, lacinia vel ultrices et, sagittis id neque. Morbi vestibulum, tellus ac iaculis cursus, nulla libero iaculis urna, eu porta nisi enim quis massa. Donec vitae quam accumsan, consequat arcu quis, aliquet elit. Sed augue odio, scelerisque sed urna quis, fermentum imperdiet nunc. Mauris sed ligula vitae magna posuere faucibus et sit amet dolor. Aliquam a ultrices erat. Mauris eleifend, sapien sed mollis cursus, mi sem mattis elit, quis pellentesque nisi quam vitae nunc. Integer et aliquam mi. Vivamus consequat eros in massa sollicitudin, ac cursus lectus euismod. Aenean facilisis vehicula tortor, nec porttitor diam tincidunt ut. Sed semper nibh nisi, eget tincidunt quam blandit vel. Vivamus maximus quam eget eros interdum, sed molestie felis cursus. Quisque ornare neque vitae bibendum ornare.
        </p>
        <p>
        Etiam ut est orci. Duis vel nibh congue, tempus risus sed, euismod ligula. Sed sagittis, enim ut tempus placerat, lorem eros maximus felis, a finibus nisl elit eget diam. Curabitur aliquet sem id ultrices aliquam. Mauris fringilla id ante non condimentum. Suspendisse potenti. Proin lacinia dui eu finibus finibus. Aliquam faucibus orci quis ligula tincidunt, at eleifend elit ultrices. Donec tempor pulvinar efficitur. Etiam arcu eros, accumsan nec ligula at, porta semper enim. In ultricies consectetur metus eu fringilla. Donec a sapien fermentum, posuere magna a, venenatis tellus. Maecenas id scelerisque mi.
        </p>
        <p>
        Nulla facilisi. Fusce diam dui, ultrices porta mi eget, faucibus rutrum ex. Proin eget pretium diam. Ut elementum erat dui, a eleifend felis semper nec. Pellentesque aliquam venenatis elit nec auctor. Donec egestas ligula non magna ullamcorper pellentesque. In hac habitasse platea dictumst. Proin tempor velit eget diam maximus ullamcorper. Maecenas dapibus, nisl non bibendum tempor, magna nisl mattis est, volutpat viverra nunc libero molestie enim. Phasellus ante augue, lacinia ut ligula non, imperdiet scelerisque elit. Nam eget nibh vel nisl semper viverra sit amet rhoncus tortor. Aliquam eget pretium turpis, at pharetra nunc. Suspendisse potenti. Quisque sem nibh, tincidunt sed enim id, scelerisque elementum risus. Nunc vitae vulputate sem, at condimentum felis. Maecenas at imperdiet odio, vel efficitur dui.
        </p>
        <p>
        In imperdiet aliquam porta. Aenean in nisl lacinia, fringilla orci vel, mattis massa. In rutrum sed quam sed molestie. Duis volutpat pharetra mi, vel maximus nisi ullamcorper ut. Sed pretium nec libero sed dapibus. Etiam vehicula porttitor ex quis consectetur. Etiam a arcu at sem venenatis gravida in aliquet mi. Nam ultricies eget massa id cursus. Nam quis mollis justo, nec accumsan mi. Vivamus vitae aliquam massa, vitae varius nibh. Cras varius nulla id metus ullamcorper mattis. Proin euismod varius ipsum.
        </p>
        <p>
        Suspendisse porta ac mi non accumsan. Integer accumsan metus vel auctor dignissim. Cras pharetra rhoncus mauris in porta. Maecenas vehicula eu nibh vitae tempor. Donec tincidunt malesuada erat, et gravida leo lacinia ac. Donec laoreet erat dui, vitae aliquam orci venenatis pellentesque. Phasellus felis ex, consectetur non ultricies et, lacinia id urna. Donec mattis justo urna, ultricies feugiat justo luctus nec.
        </p>
      </div>
    );
  }
}

Component.propTypes = {};

export default Component;
