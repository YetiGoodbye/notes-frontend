import React from 'react';

import WithBemHelper from 'CommonComponents/WithBemHelper';

class LoremIpsum1 extends WithBemHelper{
  render(){
    return (
      <div {...this.classes()}>
        <h1>Lorem Ipsum</h1>
        <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
        <h5>"Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль.."</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat tempus nisl non volutpat. Cras et fermentum arcu, vitae pharetra ipsum. Aenean pellentesque tellus in sagittis tempor. Phasellus ac bibendum magna. Vivamus in mauris nec velit laoreet dictum. Vestibulum iaculis et mauris vitae semper. Pellentesque venenatis, nisl imperdiet facilisis hendrerit, lacus eros lacinia ipsum, sit amet congue nunc est nec ex. Donec pharetra ultricies diam, non pharetra eros. Phasellus rutrum mauris justo, sit amet blandit felis hendrerit pretium. Sed ac luctus odio. Ut non lacus lobortis, suscipit risus id, tincidunt quam. Sed volutpat diam et ante auctor, ut volutpat sapien dictum. Nulla ante erat, ultricies tincidunt erat at, iaculis congue tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p>Integer eget auctor risus. Vestibulum ac ornare leo, vel dictum mauris. Vestibulum tempor efficitur aliquam. Donec vulputate fermentum arcu non pellentesque. Pellentesque non varius lectus. Fusce facilisis cursus orci, id porttitor nulla facilisis eget. Aenean at sodales augue. Nulla accumsan ante ac nisi tincidunt rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <p>Ut eleifend ornare fermentum. Maecenas consequat in libero nec pretium. Nunc semper nisi eu arcu viverra iaculis sit amet at ipsum. Suspendisse scelerisque fringilla augue, condimentum efficitur lectus porta tristique. Pellentesque in felis purus. In at justo tellus. Cras sed faucibus augue, et porta diam.</p>
        <p>Sed eget quam tempus, mollis ante vel, scelerisque orci. Vestibulum mattis sagittis tortor, nec ullamcorper nunc bibendum eget. Integer sed tincidunt mi, ultrices fermentum nibh. Donec pellentesque nulla sed pulvinar bibendum. Sed imperdiet, justo sit amet imperdiet porttitor, risus dolor bibendum eros, in mattis quam arcu at felis. Sed et egestas nisl, quis placerat lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec lorem rhoncus, maximus odio nec, pretium diam. Aenean quis gravida libero. Aliquam condimentum interdum ipsum, sed egestas mi sodales quis.</p>
        <p>Sed et tristique nisl. Aliquam pulvinar tincidunt dolor, sed rutrum magna vestibulum eu. Aliquam sit amet ornare mi. Quisque a tincidunt leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue, odio in pharetra volutpat, augue metus ultricies lectus, at aliquet erat arcu pulvinar velit. In at eleifend neque, at tempor odio. Vivamus nisl diam, hendrerit vitae enim et, rutrum pharetra erat. Donec lobortis sapien sapien, sit amet tristique orci sodales non. Duis vel quam eget tellus faucibus dictum. Proin at sagittis urna, sed tempus lacus.</p>
      </div>
    );
  }
}

export default LoremIpsum1;
