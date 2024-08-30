package gb.oop.homeworks.controller;

import gb.oop.homeworks.model.ListCalculator;
import gb.oop.homeworks.model.iListCalculator;
import gb.oop.homeworks.view.ListView;
import gb.oop.homeworks.view.View;

import java.util.ArrayList;
import java.util.List;

public class ListController {
    public ListController(iListCalculator model, View<ListCalculator> viewList) {
        this.model = model;
        this.viewList = viewList;
    }

    public ListController() {
        model = getIntListModel();
        viewList = new ListView();
    }

    private iListCalculator model;

    private View<ListCalculator> viewList;

    private ListCalculator<Integer> getIntListModel() {
        ListCalculator<Integer> result = new ListCalculator<>();
        List<Integer> intList = new ArrayList<>();
        for (int i = 5; i > 0; i--) {
            intList.add(i);
        }
        result.setNumbers(intList);
        return result;
    }

    private ListCalculator<Double> getDoubleListModel(){
        ListCalculator<Double> result = new ListCalculator<>();
        List<Double> doubleList = new ArrayList<>();
        for (int i = 5; i > 0; i--) {
            doubleList.add(Double.valueOf(i));
        }
        result.setNumbers(doubleList);
        return result;
    }

    public void runList(){
        String separator = "========================================================================";
        System.out.println(separator);
        System.out.println("Целые числа");
        System.out.println(viewList.printCalc(0, (ListCalculator) model, model.getNumbers()));
        System.out.println(viewList.printCalc(1, (ListCalculator) model, model.getNumbers()));
        System.out.println(viewList.printCalc(2, (ListCalculator) model, model.getNumbers()));
        System.out.println(separator);
        model = getDoubleListModel();
        System.out.println("Double числа");
        System.out.println(viewList.printCalc(0, (ListCalculator) model, model.getNumbers()));
        System.out.println(viewList.printCalc(1, (ListCalculator) model, model.getNumbers()));
        System.out.println(viewList.printCalc(2, (ListCalculator) model, model.getNumbers()));

    }
}
