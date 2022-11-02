import React, { useEffect, useState, useCallback } from "react";
import {
  Popover,
  Button,
  OptionList,
  Page,
  Card,
  TextStyle,
  Heading,
  TextField,
  Checkbox,
  Frame,
  Loading,
  PageActions,
  Tag,
  Layout,
  Toast,
} from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import * as authService from "../../services/authService";

function AddProducts(props) {
  function remove1ele(copySelection, index) {
    // let copySelection = selectedTag;
    const result = copySelection
      .slice(0, index)
      .concat(copySelection.slice(index + 1));
    return result;
  }

  //by price

  const [priceValue, setPriceValue] = useState("");
  const [checked, setChecked] = useState(false);
  const handleChangebyPrice = useCallback(
    (newChecked) => setChecked(newChecked),
    []
  );

  const handleTextFieldChange = useCallback(
    (value) => setPriceValue(value),
    []
  );

  //loading state

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingType, setIsLoadingType] = useState(false);

  //toast
  const [active, setActive] = useState({
    isOpen: false,
    msg: "",
    isErr: false,
  });

  const toastMarkup = active.isOpen ? (
    <Toast
      content={active.msg}
      onDismiss={() => setActive({ isOpen: false, msg: "", isErr: false })}
      error={active.isErr ? true : false}
    />
  ) : null;

  //list of tags and type

  const [tags, setTags] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsLoadingType(true);

    authService
      .getTags()
      .then((response) => {
        setIsLoading(false);

        if (
          response.data &&
          response.data.data &&
          response.data.data.edges &&
          Array.isArray(response.data.data.edges) &&
          response.data.data.edges.length > 0
        ) {
          const mapped_tags = response.data.data.edges.map((edges) => {
            return { label: edges.node, value: edges.node };
          });

          setTags(mapped_tags);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setActive({ isOpen: true, msg: "Get tags error !", isErr: true });
        console.log("Error: ", err);
      });

    authService
      .getTypes()
      .then((response) => {
        setIsLoadingType(false);

        if (
          response.data &&
          response.data.data &&
          response.data.data.edges &&
          Array.isArray(response.data.data.edges) &&
          response.data.data.edges.length > 0
        ) {
          const mapped_types = response.data.data.edges.map((edges) => {
            return { label: edges.node, value: edges.node };
          });
          setTypes(mapped_types);
        }
      })
      .catch((err) => {
        setIsLoadingType(false);
        setActive({ isOpen: true, msg: "Get types error !", isErr: true });
        console.log("Error: ", err);
      });
  }, []);

  useEffect(() => {
    getInitialProducts();
  }, []);

  function getInitialProducts() {
    setIsLoading(true);

    authService
      .getAssignFitkit()
      .then((response) => {
        setIsLoading(false);

        if (response.data && response.data.status === "success") {
          if (response.data.data) {
            const {
              collections,
              productIds,
              tags,
              productTypes,
              byPrice,
              applyByPrice,
            } = response.data.data;

            collections &&
              Array.isArray(collections) &&
              setSelectedColl(collections);
            productIds &&
              Array.isArray(productIds) &&
              setSelectedProduct(productIds);
            tags && Array.isArray(tags) && setSelectedTag(tags);
            productTypes &&
              Array.isArray(productTypes) &&
              setSelectedType(productTypes);
            applyByPrice && byPrice && setPriceValue(String(byPrice));
            setChecked(applyByPrice ? true : false);
          }
        } else {
          setActive({
            isOpen: true,
            msg: "Get product details error !",
            isErr: true,
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setActive({
          isOpen: true,
          msg: "Get product details error !",
          isErr: true,
        });
        console.log("Error: ", err);
      });
  }

  //tag
  const [popoverActiveTag, setPopoverActiveTag] = useState(false);
  const [selectedTag, setSelectedTag] = useState([]);

  const togglePopoverActiveTag = useCallback(
    () => setPopoverActiveTag((popoverActiveTag) => !popoverActiveTag),
    []
  );

  const activatorTag = (
    <Button onClick={togglePopoverActiveTag} disclosure>
      Product Tags
    </Button>
  );

  function removeSelectedTag(index) {
    let updatedRes = remove1ele(selectedTag, index);

    setSelectedTag(updatedRes);
  }

  const displaySelectedTags =
    selectedTag &&
    Array.isArray(selectedTag) &&
    selectedTag.length > 0 &&
    selectedTag.map((selectedTag, i) => {
      return (
        <div className="custom-tag" key={i}>
          <Tag onRemove={() => removeSelectedTag(i)}>{selectedTag}</Tag>
        </div>
      );
    });

  //type
  const [popoverActiveType, setPopoverActiveType] = useState(false);
  const [selectedType, setSelectedType] = useState([]);

  const togglePopoverActiveType = useCallback(
    () => setPopoverActiveType((popoverActiveType) => !popoverActiveType),
    []
  );

  const activatorType = (
    <Button onClick={togglePopoverActiveType} disclosure>
      Product Types
    </Button>
  );

  function removeSelectedType(index) {
    let updatedRes = remove1ele(selectedType, index);
    setSelectedType(updatedRes);
  }

  const displaySelectedTypes =
    selectedType &&
    Array.isArray(selectedType) &&
    selectedType.length > 0 &&
    selectedType.map((selectedType, i) => {
      return (
        <div className="custom-tag" key={i}>
          <Tag onRemove={() => removeSelectedType(i)}>{selectedType}</Tag>
        </div>
      );
    });

  //product

  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  function handleSelectedProduct(selected) {
    const selctedColl =
      selected.selection &&
      Array.isArray(selected.selection) &&
      selected.selection.length > 0
        ? selected.selection.map((selection) => {
            return selection.id;
          })
        : [];

    setActive({
      isOpen: true,
      msg: "Click on save to update products.",
      isErr: false,
    });

    setSelectedProduct(selctedColl);

    // setSelectedProduct(selected);
    setIsOpenProduct(false);
  }

  function removeSelectedProduct(index) {
    if (index > -1) {
      let updatedRes = remove1ele(selectedProduct.selection, index);

      setSelectedProduct({ ...selectedProduct, selection: updatedRes });
    }
  }

  const selectProductProducts =
    selectedProduct &&
    selectedProduct.selection &&
    Array.isArray(selectedProduct.selection) &&
    selectedProduct.selection.length > 0 &&
    selectedProduct.selection.map((selection, i) => {
      return (
        <div className="custom-tag" key={i}>
          <Tag onRemove={() => removeSelectedProduct(i)}>{selection.title}</Tag>
        </div>
      );
    });

  //collection

  const [isOpenColl, setIsOpenColl] = useState(false);
  const [selectedColl, setSelectedColl] = useState([]);

  function handleSelectedColl(selected) {
    const selctedColl =
      selected.selection &&
      Array.isArray(selected.selection) &&
      selected.selection.length > 0
        ? selected.selection.map((selection) => {
            return selection.id;
          })
        : [];

    setActive({
      isOpen: true,
      msg: "click on save to update collection.",
      isErr: false,
    });

    setSelectedColl(selctedColl);

    // setSelectedColl(selected);
    setIsOpenColl(false);
  }

  function removeSelectedColl(index) {
    if (index > -1) {
      let updatedRes = remove1ele(selectedColl.selection, index);

      setSelectedColl({ ...selectedColl, selection: updatedRes });
    }
  }

  const selectProductColl =
    selectedColl &&
    selectedColl.selection &&
    Array.isArray(selectedColl.selection) &&
    selectedColl.selection.length > 0 &&
    selectedColl.selection.map((selection, i) => {
      return (
        <div className="custom-tag" key={i}>
          <Tag onRemove={() => removeSelectedColl(i)}>{selection.title}</Tag>
        </div>
      );
    });

  //handleAssignFitKit

  function handleAssignFitKit() {
    setIsLoading(true);

    const data = {
      collections: selectedColl && selectedColl,
      productIds: selectedProduct && selectedProduct,
      tags: selectedTag && selectedTag,
      productTypes: selectedType && selectedType,
      applyByPrice: checked,
      byPrice: priceValue,
    };

    authService
      .assignFitkit(data)
      .then((response) => {
        setIsLoading(false);

        if (response && response.data && response.data.status === "success") {
          setActive({ isOpen: true, msg: "Successfully saved.", isErr: false });
          getInitialProducts();
        } else {
          setActive({
            isOpen: true,
            msg: "Something went wrong! Please try again.",
            isErr: true,
          });
        }
      })
      .catch((err) => {
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true,
        });
        setIsLoading(false);
        console.log("Error", err);
      });
  }

  return (
    <>
      <div className="Polaris-Header-Title heading-mar">Add FitKit</div>
      <Layout>
        {/* product wise */}

        <Layout.Section oneHalf>
          <Card sectioned>
            <TextStyle variation="strong">
              Select product to add FitKit
            </TextStyle>
            <br />
            <br />
            <Button onClick={() => setIsOpenProduct(true)}>
              Choose Product
            </Button>
            <br />

            {isOpenProduct && (
              <ResourcePicker
                resourceType="Product"
                open
                onSelection={(val) => {
                  handleSelectedProduct(val);
                }}
                showVariants={false}
                allowMultiple={true}
                onCancel={() => setIsOpenProduct(false)}
                initialSelectionIds={
                  selectedProduct &&
                  Array.isArray(selectedProduct) &&
                  selectedProduct.length > 0
                    ? selectedProduct.map((sp) => {
                        return { id: sp };
                      })
                    : []
                }
              />
            )}

            {/* {selectProductProducts && selectProductProducts} */}
          </Card>
        </Layout.Section>

        {/* collection wise */}

        <Layout.Section oneHalf>
          <Card sectioned>
            <TextStyle variation="strong">
              Select collection to add FitKit
            </TextStyle>
            <br />
            <br />
            <Button onClick={() => setIsOpenColl(true)}>
              Choose Collection
            </Button>
            <br />

            {isOpenColl && (
              <ResourcePicker
                resourceType="Collection"
                open
                onSelection={(val) => {
                  handleSelectedColl(val);
                }}
                showVariants={false}
                allowMultiple={true}
                onCancel={() => setIsOpenColl(false)}
                initialSelectionIds={
                  selectedColl &&
                  Array.isArray(selectedColl) &&
                  selectedColl.length > 0
                    ? selectedColl.map((sp) => {
                        return { id: sp };
                      })
                    : []
                }
              />
            )}

            {/* {selectProductColl && selectProductColl} */}
          </Card>
        </Layout.Section>

        {/* tag wise */}

        <Layout.Section>
          <Card sectioned>
            <TextStyle variation="strong">
              Assign FitKit product tag wise
            </TextStyle>
            <br />
            <br />
            <Popover
              active={popoverActiveTag}
              activator={activatorTag}
              onClose={togglePopoverActiveTag}
            >
              <OptionList
                title="Manage Fitkit product tag wise"
                onChange={setSelectedTag}
                options={tags}
                selected={selectedTag}
                allowMultiple
              />
            </Popover>

            {displaySelectedTags && displaySelectedTags}
          </Card>
        </Layout.Section>

        {/* type wise */}

        <Layout.Section>
          <Card sectioned>
            <TextStyle variation="strong">
              Assign FitKit product type wise
            </TextStyle>
            <br />
            <br />
            <Popover
              active={popoverActiveType}
              activator={activatorType}
              onClose={togglePopoverActiveType}
            >
              <OptionList
                title="Manage Fitkit product type wise"
                onChange={setSelectedType}
                options={types}
                selected={selectedType}
                allowMultiple
              />
            </Popover>
            {displaySelectedTypes && displaySelectedTypes}
          </Card>
        </Layout.Section>

        {/* filter by price */}

        <Layout.Section>
          <Card sectioned>
            <TextStyle variation="strong">Apply widget by price</TextStyle>
            <br />
            <br />
            <Checkbox
              label="Filter by price?"
              checked={checked}
              onChange={handleChangebyPrice}
              helpText="Show the selected options if the price above (X)."
            />{" "}
            {checked && (
              <TextField
                type="number"
                value={priceValue}
                onChange={handleTextFieldChange}
              />
            )}
          </Card>
        </Layout.Section>

        <Layout.Section>
          <div className="action-btns">
            <PageActions
              primaryAction={{
                disabled: isLoading || isLoadingType,
                content: "Save",
                onAction: handleAssignFitKit,
              }}
              secondaryActions={[
                {
                  content: "Cancel",
                  destructive: true,
                  onAction: getInitialProducts,
                },
              ]}
            />
          </div>

          <Frame>
            {(isLoading || isLoadingType) && <Loading />}
            {toastMarkup}
          </Frame>
        </Layout.Section>
      </Layout>
    </>
  );
}

export default AddProducts;
