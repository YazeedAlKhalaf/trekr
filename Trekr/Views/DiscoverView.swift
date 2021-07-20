//
//  ContentView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

struct DiscoverView: View {
    @EnvironmentObject var locationsLoader: LocationsLoader
    
    var body: some View {
        ScrollView {
            ForEach(locationsLoader.places) {location in
                NavigationLink(
                    destination: LocationInfoView(
                        location: location
                    )
                ) {
                    LocationWidget(
                        location: location
                    )
                }
            }
            
        }
        .navigationTitle("Discover")
        .buttonStyle(PlainButtonStyle())
    }
}

struct DiscoverView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            DiscoverView()
        }
    }
}
