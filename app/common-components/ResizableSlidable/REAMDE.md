##ResizableSlidable
Responsive two pane component.
Desktop: two veritical columns with resizer.
Mobile: two slidable panes.
####Using
```
function SomeComponent(){
  return (
    <ResizableSlidable
      klassName = {classNames.resizableSlidable}
      left={{
        component: LeftComponent,
        props: {
          propName1: propValue1,
          propName2: propValue2,
        },
      }}
      right={{
        component: RightComponent,
        props: {
          propName3: propValue3,
          propName4: propValue4,
        },
      }}
    />
  );
}
```
or
```
function SomeComponent(){
  return (
    <ResizableSlidable
      klassName = {classNames.resizableSlidable}
      left={
        <LeftComponent
          propName1=propValue1
          propName2=propValue2
        />
      }
      right={
        <LeftComponent
          propName3=propValue3
          propName4=propValue4
        />
      }
    />
  );
}
```
